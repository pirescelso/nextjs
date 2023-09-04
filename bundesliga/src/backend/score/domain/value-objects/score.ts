export type ScoreProps = {
  gameNumber: number;
  homeGols: number;
  awayGols: number;
};

export class Score {
  gameNumber: number;
  homeGols: number;
  awayGols: number;
  column: "1" | "X" | "2";

  constructor(props: ScoreProps) {
    this.gameNumber = props.gameNumber;
    this.homeGols = props.homeGols;
    this.awayGols = props.awayGols;
    if (this.homeGols > this.awayGols) {
      this.column = "1";
    } else {
      if (this.homeGols < this.awayGols) {
        this.column = "2";
      } else {
        this.column = "X";
      }
    }
  }
}
