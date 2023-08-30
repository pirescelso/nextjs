export type GameProps = {
    home: string;
    homeGols: number;
    away: string;
    awayGols: number;
}

export abstract class Game {
    home: string;
    homeGols: number;
    away: string;
    awayGols: number;
    column: "1" | "X" | "2";

    constructor(props: GameProps) {
        this.home = props.home;
        this.homeGols = props.homeGols;
        this.away = props.away;
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