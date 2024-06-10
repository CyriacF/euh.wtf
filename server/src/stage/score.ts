import { Player } from '../../../common/src/player/player';
import * as fs from 'fs';

export class Score {
	public static scoreboard: Player[] = [];
	private static readonly LIMIT_PLAYER_IN_SCOREBOARD: number = 10;

	public static addPlayerInScoreBoardAndSort(player: Player): void {
		Score.scoreboard.push(player);
		Score.scoreboard = Score.getSortedScoreBoardList(Score.scoreboard);
		Score.limitScoreBoardList(Score.scoreboard);
		Score.saveScoreBoardInFile();
	}

	public static getSortedScoreBoardList(scoreboard: Player[]) {
		return Score.scoreboard.sort((a, b) => b.totalScore - a.totalScore);
	}

	private static limitScoreBoardList(scoreboard: Player[]) {
		Score.scoreboard = Score.scoreboard.slice(
			0,
			Score.LIMIT_PLAYER_IN_SCOREBOARD
		);
	}

	public static saveScoreBoardInFile(): void {
		const data = JSON.stringify(Score.scoreboard);
		fs.writeFile('scoreboard.json', data, err => {
			if (err) {
				throw err;
			}
		});
	}

	public static loadScoreBoardFromFile(): void {
		if (!fs.existsSync('scoreboard.json')) {
			fs.writeFileSync('scoreboard.json', '[]');
		}
		fs.readFile('scoreboard.json', (err, data) => {
			if (err) {
				throw err;
			}
			Score.scoreboard = JSON.parse(data.toString());
		});
	}
}
