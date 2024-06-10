import { io } from 'socket.io-client';

const canvas = document.createElement('canvas');
canvas.width = 3000;
canvas.height = 3000;
const container = document.getElementById('canvas-container');
container.appendChild(canvas);
let inGame = false;
const playerName = '';
//canvas.style.scale = 0.8;

/* ---- POPUP ---- */

let popup = document.getElementById('popup');
let popupreplay = document.getElementById('popup-replay');
let scoreBoardDiv = document.getElementById('popup-leader');
popup.style.display = 'block';
let playButton = document.getElementById('playButton');
let menuButton = document.getElementById('menuButton');
let replayButton = document.getElementById('replayButton');
let leaderButton = document.getElementById('leaderButton');

playButton.onclick = function () {
	popup.style.display = 'none';
	popupreplay.style.display = 'none';
	socket.emit('addPlayer', document.getElementById('nameInput').value);
	playerName = document.getElementById('nameInput').value;
	inGame = true;
};
replayButton.onclick = function () {
	popup.style.display = 'none';
	popupreplay.style.display = 'none';
	socket.emit('addPlayer', playerName);
	inGame = true;
};
menuButton.onclick = function () {
	popup.style.display = 'block';
	popupreplay.style.display = 'none';
	scoreBoardDiv.style.display = 'none';
};
leaderButton.onclick = function () {
	popup.style.display = 'none';
	popupreplay.style.display = 'none';
	scoreBoardDiv.style.display = 'block';

	socket.emit('getScoreBoard');
	socket.on('scoreBoard', scoreBoard => {
		let scoreBoardDiv = document.getElementById('textleader');
		scoreBoardDiv.innerHTML = '';
		const i = 1;
		scoreBoard.forEach(player => {
			let playerDiv = document.createElement('div');
			playerDiv.innerHTML += `<li style="color:${player.color}";>${i} - ${player.name} : ${player.totalScore} points</li>`;
			i++;
			scoreBoardDiv.appendChild(playerDiv);
		});
	});
};

const context = canvas.getContext('2d');

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

let x = canvas.width / 2;
let y = canvas.height / 2;
let clientX = 0;
let clientY = 0;
let canvasX = 1500;
let canvasY = 1500;
const socket = io();
let game;

function drawGrid() {
	const gridSpacing = 100;
	context.beginPath();
	for (let x = 0; x < 3000; x += gridSpacing) {
		context.moveTo(x, 0);
		context.lineTo(x, 3000);
	}
	for (let y = 0; y < 3000; y += gridSpacing) {
		context.moveTo(0, y);
		context.lineTo(3000, y);
	}
	context.strokeStyle = 'rgba(0, 0, 0, 0.2)';
	context.stroke();
}

function drawBorder() {
	context.beginPath();
	context.lineWidth = 4;
	context.strokeStyle = '#000000';
	context.moveTo(0, 0);
	context.lineTo(0, canvas.height);
	context.lineTo(canvas.width, canvas.height);
	context.lineTo(canvas.width, 0);
	context.closePath();
	context.stroke();
}

function drawPlayer(coordx, coordy) {
	let p = game.playerList.filter(player => player.id === socket.id)[0];
	if (p != undefined) {
		context.beginPath();
		context.arc(coordx, coordy, p.food, 0, 2 * Math.PI);
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.stroke();
		context.fillStyle = 'red';
		context.fill();
		context.font = 'bold 16px Arial';
		context.textAlign = 'center';
		context.fillStyle = 'black';
		context.fillText(p.name, coordx, coordy);
	}
}

socket.on('death', (timeSurvived, food, score) => {
	inGame = false;
	popupreplay.style.display = 'block';
	let message = document.getElementById('textdeath');
	message.innerText = `Vous êtes mort avec un total de : ${score} points \n\n Vous avez survécu ${timeSurvived} secondes \n\n Vous avez mangé ${food} de nourritures`;
});

function updateClassement() {
	if (!inGame) {
		document.getElementById('classement').style.display = 'none';
		document.getElementById('score').style.display = 'none';
		return;
	}
	document.getElementById('classement').style.display = 'block';
	document.getElementById('score').style.display = 'block';
	let classement = document.getElementById('textclassement');
	classement.innerHTML = '';
	game.playerList.sort((a, b) => b.food - a.food);
	let i = 1;
	game.playerList.forEach(p => {
		classement.innerHTML += `<li>${i} - ${p.name} : ${p.food} points</li>`;
		i++;
	});
	let scorepopup = document.getElementById('score');
	const score = scorepopup.querySelector('p');
	score.innerText = `Score : ${
		game.playerList.filter(player => player.id === socket.id)[0].food
	}`;
}

function moveCanvas() {
	const mouseX = clientX;
	const mouseY = clientY;

	const dx = mouseX - centerX;
	const dy = mouseY - centerY;
	const distance = Math.sqrt(dx * dx + dy * dy);
	const speed = -5;
	const zoom = 1;
	try {
		if (game != undefined) {
			let p = game.playerList.filter(player => player.id === socket.id)[0];
			speed = -(10 * Math.exp(-0.005 * p.food));
			zoom = 1 / (1 + p.food / 100);
		}
	} catch (e) {
		speed = -5;
		zoom = 1;
	}
	const directionX = dx / distance;
	const directionY = dy / distance;
	const moveX = directionX * speed;
	const moveY = directionY * speed;

	if (mouseX !== centerX && mouseY !== centerY) {
		canvasX += moveX;
		canvasY += moveY;
	}

	//verif si le canvas est dans les limites
	const canvasRect = canvas.getBoundingClientRect();
	x = window.innerWidth / 2 - canvasRect.left - canvasX;
	y = window.innerHeight / 2 - canvasRect.top - canvasY;
	if (x < 0) {
		canvasX = window.innerWidth / 2 - canvasRect.left;
	}
	if (y < 0) {
		canvasY = window.innerHeight / 2 - canvasRect.top;
	}
	if (x > canvas.width) {
		canvasX = window.innerWidth / 2 - canvasRect.left - canvas.width;
	}
	if (y > canvas.height) {
		canvasY = window.innerHeight / 2 - canvasRect.top - canvas.height;
	}

	// Déplacer le canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.save();
	if (inGame) {
		context.translate(canvasX, canvasY);
		//context.scale(zoom, zoom);
	} else {
		canvasX = -500;
		canvasY = -1000;
	}
	drawGrid();
	drawBorder();
	socket.emit('updatePlayer', x, y);
	printFoodAndPlayers();

	context.restore();
}

function printFoodAndPlayers() {
	if (game != undefined) {
		game.foodList.forEach(p => {
			context.beginPath();
			context.moveTo(p.coordx + p.food * 8, p.coordy);
			for (let i = 1; i <= 6; i++) {
				let angle = (i * Math.PI) / 3;
				let x = p.coordx + p.food * 8 * Math.cos(angle);
				let y = p.coordy + p.food * 8 * Math.sin(angle);
				context.lineTo(x, y);
			}
			context.closePath();
			context.lineWidth = 2;
			context.strokeStyle = 'black';
			context.stroke();
			context.fillStyle = p.color;
			context.fill();
		});
		game.playerList.forEach(p => {
			context.beginPath();
			context.arc(p.coordx, p.coordy, p.food, 0, 2 * Math.PI);
			context.strokeStyle = 'rgba(255, 102, 102, 0.8)';
			context.lineWidth = 4;
			context.stroke();
			context.fillStyle = p.color;
			context.fill();
			context.font = 'bold 16px Arial';
			context.textAlign = 'center';
			context.fillStyle = 'black';
			context.fillText(p.name, p.coordx, p.coordy);
		});
	}
}

canvas.addEventListener('mousemove', event => {
	clientX = event.clientX;
	clientY = event.clientY;
});

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	socket.emit('getBoard');
	socket.on('board', board => {
		game = board;
	});
	moveCanvas();
	updateClassement();
}

setInterval(render, 1000 / 60);
