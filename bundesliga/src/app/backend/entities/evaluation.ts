import {Bet} from "@/app/backend/entities/bet"
import {Result} from "@/app/backend/entities/result"

export type EvaluationProps = {
    bet: Bet;
    result: Result;
}

export class Evaluation {
    bet: Bet;
    result: Result;
    points: number;

    constructor(props: EvaluationProps) {
        this.bet = props.bet;
        this.result = props.result;
        const checkScore = Evaluation.checkScore(props);
        if (this.bet.column === this.result.column) {
            if (this.bet.column === "1") {
                if (checkScore) {
                    this.points = 5 
                } else {
                    this.points = 4
                }
            } else {
                if (checkScore) {
                    this.points = 10 
                } else {
                    this.points = 8
                }
            }
        } else {
            this.points = 0;
        }
    }

    static checkScore(props: EvaluationProps) {
        if (props.bet.homeGols === props.result.homeGols && props.bet.awayGols === props.result.awayGols) { 
            return true 
        }
        return false
    }
}
