import { Player } from '../../../common/src/player/player';
import { Board } from '../../../common/src/Board';
import { Score } from './score';

describe('Test tableau score', () => {
	const board = new Board();
	it('Test du tri', function () {
		const playerPetitScore = new Player(board, 'PetitScore', 0, 0, 30, '');

		const playerGrandScore = new Player(board, 'GrandScore', 0, 0, 80, '');

		const player3emePlace = new Player(board, 'player3', 2, 2, 25, '');

		const playerNEW3emePlace = new Player(board, 'player3NEW', 2, 2, 26, '');

		playerPetitScore.getTotalScore();
		playerGrandScore.getTotalScore();
		player3emePlace.getTotalScore();
		playerNEW3emePlace.getTotalScore();

		board.addPlayer(playerPetitScore);

		board.addPlayer(playerGrandScore);

		board.addPlayer(player3emePlace);

		board.addPlayer(playerNEW3emePlace);

		Score.addPlayerInScoreBoardAndSort(playerPetitScore);

		Score.addPlayerInScoreBoardAndSort(playerGrandScore);

		Score.addPlayerInScoreBoardAndSort(player3emePlace);

		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);
		Score.addPlayerInScoreBoardAndSort(playerNEW3emePlace);

		expect(Score.scoreboard[0]).toBe(playerGrandScore);
	});
	it('Pas plus de 10 players dans le score board', function () {
		expect(Score.scoreboard.length < 11).toBe(true);
	});
});
