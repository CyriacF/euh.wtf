import { Board } from '../Board';
import { Score } from '../../../server/src/stage/score';

export class Player {
	private readonly MAX_FOOD: number = 500;
	public name: string;
	public coordx: number;
	public coordy: number;
	public food: number;
	private readonly timeStart: Date;
	public readonly id: string;
	public totalScore: number = 0;
	public invincible: boolean = true;
	public color: string = this.getRandomColor();
	//private board: Board;

	constructor(
		board: Board,
		name: string,
		coordx: number,
		coordy: number,
		food: number,
		id: string
	) {
		//this.board = board;
		this.id = id;
		this.name = name;
		this.coordx = coordx;
		this.coordy = coordy;
		this.food = food;
		this.timeStart = new Date();
		Score.scoreboard;
	}

	public addPlayerInList() {
		//this.board.playerList.push(this);
	}

	public addFood(amount: number): void {
		if (this.food + amount < this.MAX_FOOD) {
			this.food += amount;
		}
		// Avoid disconnect with 0 totalScore
		this.getTotalScore();
	}

	private getRandomColor(): string {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	public getTotalTimeSurviveInSeconds(): number {
		const timeEnd: Date = new Date();
		const diffInSeconds: number =
			(timeEnd.getTime() - this.timeStart.getTime()) / 1000;
		return Math.round(diffInSeconds);
	}

	public getTotalScore(): number {
		this.totalScore = Math.round(
			this.getTotalTimeSurviveInSeconds() + 1 + this.food / 2
		);
		return this.totalScore;
	}

	public distanceBtwnTwoPlayer(player2: Player) {
		const distance = Math.sqrt(
			Math.pow(player2.coordx - this.coordx, 2) +
				Math.pow(player2.coordy - this.coordy, 2)
		);
		return distance;
	}

	public colision(player2: Player): void {
		//add player2.food + this.food /2
		if (this.distanceBtwnTwoPlayer(player2) <= player2.food + this.food) {
			if (this.food < player2.food) {
				player2.addFood(this.food);
				player2.totalScore = player2.getTotalScore();
				this.totalScore = this.getTotalScore();
				this.food = 0;
			}
		}
	}
}
