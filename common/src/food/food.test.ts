import { Board } from '../Board';
import { Player } from '../player/player';
import { Food } from './Food';

describe('Test food et food avec interaction player', () => {
	const board = new Board();
	const food = new Food(board, 3, 0, 0);
	const food2 = new Food(board, 3, 0, 0);
	const food3 = new Food(board, 3, 0, 0);
	const food4 = new Food(board, 10, 0, 0);

	it('Un player mange une food', function () {
		const player = new Player(board, 'test', 2, 2, 30, '');
		player.addPlayerInList();

		const food = new Food(board, 10, 2, 2);
		food.colision(player);
		expect(player.food).toBe(40);
	});

	it("La food mangé n'est plus dans le tableau des foods", function () {
		board.refreshBoardListPlayerAndFood();
		expect(board.foodList.length).toBe(4);
		expect(board.foodList[3]).toBe(food4);
	});
});
