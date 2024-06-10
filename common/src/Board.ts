import { Player } from './player/player';
import { Food } from './food/Food';

export class Board {
	/*
	public static playerList: Player[] = [];
	public static foodList: Food[] = [];*/

	public playerList: Player[] = [];
	public foodList: Food[] = [];

	constructor() {
		this.playerList = [];
		this.foodList = [];
	}

	public getFoodList(): Food[] {
		return this.foodList;
	}

	public checkIfPlayerIsNotHere(player: Player): boolean {
		//distance player soit inférieur a la taille de other
		let playerNotHere = true;
		this.playerList.forEach(otherPlayer => {
			if (player.distanceBtwnTwoPlayer(otherPlayer) <= otherPlayer.food) {
				playerNotHere = false;
			}
		});
		return playerNotHere;
	}

	public refreshBoardListPlayerAndFood(): void {
		let tabPlayerAlive: Player[] = [];
		let tabFoodAlive: Food[] = [];
		this.playerList.forEach(player => {
			if (player.food != 0) {
				tabPlayerAlive.push(player);
			}
		});
		this.foodList.forEach(food => {
			if (food.food != 0) {
				tabFoodAlive.push(food);
			}
		});
		this.playerList = tabPlayerAlive;
		this.foodList = tabFoodAlive;
	}

	public addPlayer(player: Player): void {
		this.playerList.push(player);
	}

	public removePlayer(player: Player): void {
		try {
			const index = this.playerList.findIndex(p => p.id === player.id);
			if (index !== -1) {
				this.playerList.splice(index, 1);
			}
		} catch (e) {
			console.log(e);
		}
	}
}
