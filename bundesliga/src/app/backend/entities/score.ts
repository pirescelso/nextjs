export type ScoreProps = {
    homeGols: number;
    awayGols: number;
}

export abstract class Score {
    homeGols: number;
    awayGols: number;
    column: "1" | "X" | "2";

    constructor(props: ScoreProps) {
        this.homeGols = props.homeGols;
        this.awayGols = props.awayGols;
        if (this.homeGols > this.awayGols) {
            this.column = "1"
        } else {
            if (this.homeGols < this.awayGols) {
                this.column = "2"
            } else {
                this.column = "X"
            }
        }
    }
}