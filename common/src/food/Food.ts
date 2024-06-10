import { Board } from '../Board';
import { Player } from '../player/player';
export class Food extends Player {
	constructor(board: Board, foodvalue: number, coordx: number, coordy: number) {
		super(board, '', coordx, coordy, foodvalue, '');
		board.foodList.push(this);
	}
}
