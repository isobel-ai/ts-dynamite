import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    dynamiteSupply = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        let randomIndex = -1;
        do {
            randomIndex = Math.floor(Math.random() * 4);
        } while (randomIndex == 3 && this.dynamiteSupply < 1);
        
        switch (randomIndex) {
            case 0:
                return 'R';
            case 1:
                return 'P';
            case 2:
                return 'S';
            case 3:
                this.dynamiteSupply--;
                return 'D';
            default: // case 4
                return 'W';
        }
    }
}

export = new Bot();