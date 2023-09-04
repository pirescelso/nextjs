import { Score, ScoreProps } from "@/backend/score/domain/value-objects/score";

export type BetProps = {
  id: string;
  gameDayId: string;
  betterId: string;
  scores: ScoreProps[];
};

export class Bet {
  id: string;
  gameDayId: string;
  betterId: string;
  scores: Score[];

  constructor(props: BetProps) {
    this.id = props.id;
    this.gameDayId = props.gameDayId;
    this.betterId = props.betterId;
    this.scores = Bet.createScores(props.scores);
  }

  static create(props: Omit<BetProps, "id">) {}

  static restore(props: BetProps) {
    return new Bet(props);
  }

  private static createScores(scores: ScoreProps[]) {
    return scores.map((s) => new Score(s));
  }
}
