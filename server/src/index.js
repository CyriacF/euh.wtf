import express from 'express';
import http from 'http';
import { Player } from '../../common/src/player/player.js';
import { Board } from '../../common/src/Board.js';
import { Food } from '../../common/src/food/Food.js';
import { Server as IOServer } from 'socket.io';
import addWebpackMiddleware from './addWebpackMiddleware.js';
import { Score } from './stage/score.js';

//Creation instance de la map:
const MAX_Y = 3000;
const MAX_X = 3000;

let board = new Board();
const clients = new Map();

//-------------------

const app = express(),
	httpServer = http.createServer(app);

addWebpackMiddleware(app); // compilation js client
app.use(express.static('client/public')); // fichiers statiques (html, css, js)

const io = new IOServer(httpServer);

Score.loadScoreBoardFromFile();

io.on('connection', socket => {
	console.log(`Nouvelle connexion du client ${socket.id}`);
	clients.set(socket.id, socket);

	socket.on('addPlayer', playerName => {
		console.log(`Nouveau joueur ${playerName}`);

		let player = new Player(
			board,
			playerName,
			MAX_X / 2,
			MAX_Y / 2,
			30,
			socket.id
		);

		while (board.checkIfPlayerIsNotHere(player) != true) {
			player.coordx = Math.floor(Math.random() * MAX_X);
			player.coordy = Math.floor(Math.random() * MAX_Y);
		}
		board.addPlayer(player);
	});
	socket.on('getBoard', () => {
		checkCollision();
		socket.emit('board', board);
	});

	socket.on('getScoreBoard', () => {
		socket.emit('scoreBoard', Score.scoreboard);
	});

	socket.on('updatePlayer', (x, y) => {
		let player = board.playerList.filter(player => player.id === socket.id)[0];
		if (player != undefined) {
			player.coordx = x;
			player.coordy = y;
		}
	});

	// déconnexion
	socket.on('disconnect', () => {
		console.log(`Déconnexion du client ${socket.id}`);
		let player = board.playerList.filter(player => player.id === socket.id)[0];
		if (player != undefined) {
			Score.addPlayerInScoreBoardAndSort(player);
			board.removePlayer(player);
		}
		clients.delete(socket.id);
	});
});

//-------- generer food new

function generateFood(number) {
	for (let i = 0; i < number; i++) {
		new Food(
			board,
			1,
			Math.floor(Math.random() * MAX_X),
			Math.floor(Math.random() * MAX_Y)
		);
	}
}

function checkCollision() {
	for (let i = 0; i < board.playerList.length; i++) {
		let player1 = board.playerList[i];
		for (let j = 0; j < board.foodList.length; j++) {
			let food = board.foodList[j];

			let distance = player1.distanceBtwnTwoPlayer(food);

			if (distance < player1.food + food.food / 2) {
				//player1.food += food.food;
				player1.addFood(food.food);
				if (player1.invincible != false) player1.invincible = false;
				board.foodList.splice(j, 1);
				generateFood(1);
			}
		}

		for (let j = i + 1; j < board.playerList.length; j++) {
			let player2 = board.playerList[j];

			let distance = player1.distanceBtwnTwoPlayer(player2);

			if (distance < player1.food + player2.food / 2) {
				if (player1.invincible == false && player2.invincible == false) {
					if (player1.food > player2.food) {
						//player1.food += player2.food;
						player1.addFood(player2.food);
						sendDeathInfos(player2);
						board.playerList.splice(j, 1);
					} else {
						//player2.food += player1.food;
						player2.addFood(player1.food);
						sendDeathInfos(player1);
						board.playerList.splice(i, 1);
						break;
					}
				}
			}
		}
	}
}

function sendDeathInfos(player) {
	const socket = clients.get(player.id);
	Score.addPlayerInScoreBoardAndSort(player);
	if (socket) {
		socket.emit(
			'death',
			player.getTotalTimeSurviveInSeconds(),
			player.food,
			player.getTotalScore()
		);
	}
}

generateFood(100);

const port = process.env.PORT || 8000;
httpServer.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
