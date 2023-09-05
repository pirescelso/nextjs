import { BetScore, BetScoreProps, BetScorePropsJson } from "./bet-score";
import { v4 as uuidv4 } from "uuid";

export type BetProps = {
  id: string;
  gameDayId: string;
  betterId: string;
  betScores: BetScoreProps[];
};

export type BetPropsJson = Omit<BetProps, "betScores"> & {
  betScores: BetScorePropsJson[];
};

type PrivateProps = Omit<BetProps, "betScores"> & {
  betScores: BetScore[];
};

export class Bet {
  id: string;
  gameDayId: string;
  betterId: string;
  betScores: BetScore[];

  constructor(props: PrivateProps) {
    this.id = props.id;
    this.gameDayId = props.gameDayId;
    this.betterId = props.betterId;
    this.betScores = props.betScores;
  }

  static create(props: Omit<BetProps, "id">) {
    const betScores = props.betScores.map((b) => BetScore.create(b));
    return new Bet({ ...props, betScores, id: uuidv4() });
  }

  static restore(props: BetProps) {
    const betScores = props.betScores.map((b) => BetScore.restore(b));
    return new Bet({ ...props, betScores });
  }

  toJSON(): BetPropsJson {
    return {
      ...this,
      betScores: this.betScores.map((b) => {
        b.toJSON();
      }),
    };
  }
}
