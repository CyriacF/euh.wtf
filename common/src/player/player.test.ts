import { Player } from './player';
import { Board } from '../Board';

describe("Création d'un player", () => {
	const board = new Board();
	const playerTest = new Player(board, 'test', 0, 0, 30, '');
	board.addPlayer(playerTest);
	it('creation du player', function () {
		expect(playerTest.name).toBe('test');
	});

	it('Ajouter de la nourriture', function () {
		playerTest.addFood(2);
		expect(playerTest.food).toBe(32);
	});
});

describe('Agir sûr un joueur', () => {
	const board = new Board();
	it('suppression joueur', function () {
		const playerTest = new Player(board, 'test1', 0, 0, 30, '');
		const playerTest2 = new Player(board, 'test2', 0, 0, 30, '');
		board.addPlayer(playerTest);
		board.addPlayer(playerTest2);

		playerTest2.food = 0;
		board.refreshBoardListPlayerAndFood();
		expect(board.playerList.length).toBe(1);
	});
});

describe('Un joueur en mange un autre', () => {
	const board = new Board();
	const playerQuiMange = new Player(board, 'PlayerQuiMange', 1.3, 1, 30, '');
	const playerQuiSeFaitManger = new Player(
		board,
		'PlayerQuiSeFaitMange',
		1,
		1.97655,
		30,
		''
	);

	playerQuiMange.addPlayerInList();
	playerQuiSeFaitManger.addPlayerInList();

	playerQuiMange.addFood(10);

	it('Un joueur en mange un autre', function () {
		playerQuiSeFaitManger.colision(playerQuiMange);
		expect(playerQuiMange.food).toBe(70);
		expect(playerQuiSeFaitManger.food <= 0).toBe(true);
	});

	it('Recuperation des scores des players', function () {
		expect(
			playerQuiSeFaitManger.totalScore >= 16 &&
				playerQuiSeFaitManger.totalScore <= 17
		).toBe(true);
		expect(
			playerQuiMange.totalScore >= 36 && playerQuiMange.totalScore <= 37
		).toBe(true);
	});
});
