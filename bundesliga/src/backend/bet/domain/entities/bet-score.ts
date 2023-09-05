import { v4 as uuidv4 } from "uuid";

export type BetScoreProps = {
  id: string;
  gameId: string;
  betId: string;
  homeGols: number;
  awayGols: number;
};

export type BetScorePropsJson = BetScoreProps;

export class BetScore {
  id: string;
  gameId: string;
  betId: string;
  homeGols: number;
  awayGols: number;

  constructor(props: BetScoreProps) {
    this.id = props.id;
    this.gameId = props.gameId;
    this.betId = props.betId;
    this.homeGols = props.homeGols;
    this.awayGols = props.awayGols;
  }

  static create(props: Omit<BetScoreProps, "id">) {
    return new BetScore({ id: uuidv4(), ...props });
  }

  static restore(props: BetScoreProps) {
    return new BetScore(props);
  }

  toJSON(): BetScorePropsJson {
    return {
      ...this,
    };
  }
}
