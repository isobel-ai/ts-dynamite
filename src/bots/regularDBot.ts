import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    dynamiteSupply = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        if (gamestate.rounds.length % 25 == 0 && this.dynamiteSupply > 0) {
            this.dynamiteSupply--;
            return 'D'
        }

        let randomIndex = -1;
        randomIndex = Math.floor(Math.random() * 3);
        
        switch (randomIndex) {
            case 0:
                return 'R';
            case 1:
                return 'P';
            case 2:
                return 'S';
            default: // case 3
                return 'W';
        }
    }
}

export = new Bot();