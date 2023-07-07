import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    dynamiteSupply = 100;
    opponentDynamiteRounds = [];

    makeMove(gamestate: Gamestate): BotSelection {

        // Keep track of what rounds opponent uses dynamite in
        if (gamestate.rounds.length > 0 && gamestate.rounds[gamestate.rounds.length - 1].p2 == 'D') {
            this.opponentDynamiteRounds.push(gamestate.rounds.length - 1);
        }

        // Attempt to use all dynamite - assume 2000 rounds on average
        const dynamiteRounds = []
        for (let i = 0; i < 100; i++) {
            let randomRound;
            do {
                randomRound = Math.floor(Math.random() * 1999);
            } while ((dynamiteRounds.includes(randomRound)))
            dynamiteRounds.push(randomRound);
        }
        if (dynamiteRounds.includes(gamestate.rounds.length) && this.dynamiteSupply > 0) {
            this.dynamiteSupply--
            return 'D'

        } else {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * 4);
            } while (
                // Don't use dynamite if you have none left
                (randomIndex == 3 && this.dynamiteSupply < 1) 
                ||
                // Don't use waterballoon if opponent is out of dynamite
                (randomIndex == 4 && this.opponentDynamiteRounds.length >= 100));
            
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
}

export = new Bot();