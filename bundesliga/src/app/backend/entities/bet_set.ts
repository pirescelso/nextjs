import { Bet } from "./bet";
import { Better } from "./better";
import { Game } from "./game";
import { Result } from "./result";

export type BetSetProps = {
    better: Better
    games: Game[]
    bets: Bet[]
    results: Result[]
}

export class BetSet {
    better: Better
    games: Game[]
    bets: Bet[]
    results: Result[]
    points: number

    constructor(props: BetSetProps) {
        this.better = props.better;
        this.games = props.games;
        this.bets = props.bets;
        this.results = props.results;
        this.points = BetSet.sum(props);
    }

    private static sum (props: BetSetProps) {
        let points = 0;
        for (let i = 0; i < props.bets.length; i++) {
            points = points + BetSet.evaluation(props.bets[i], props.results[i]);
        }
        return points;
    }

    private static evaluation (bet: Bet, result: Result) {
        const checkScore = BetSet.checkScore(bet, result);
        if (bet.column === result.column) {
            if (bet.column === "1") {
                if (checkScore) {
                    return 5 
                } else {
                    return 4
                }
            } else {
                if (checkScore) {
                    return 10 
                } else {
                    return 8
                }
            }
        } else {
            return 0;
        }
    }

    private static checkScore(bet: Bet, result: Result) {
        if (bet.homeGols === result.homeGols && bet.awayGols === result.awayGols) { 
            return true 
        }
        return false
    }
}