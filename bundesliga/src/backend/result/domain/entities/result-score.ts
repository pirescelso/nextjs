import { v4 as uuidv4 } from "uuid";

export type ResultScoreProps = {
  id: string;
  gameId: string;
  homeGols: number;
  awayGols: number;
};

export type ResultScorePropsJson = ResultScoreProps;

export class ResultScore {
  id: string;
  gameId: string;
  homeGols: number;
  awayGols: number;

  constructor(props: ResultScoreProps) {
    this.id = props.id;
    this.gameId = props.gameId;
    this.homeGols = props.homeGols;
    this.awayGols = props.awayGols;
  }

  static create(props: Omit<ResultScoreProps, "id">) {
    return new ResultScore({ id: uuidv4(), ...props });
  }

  static restore(props: ResultScoreProps) {
    return new ResultScore(props);
  }

  toJSON(): ResultScorePropsJson {
    return {
      ...this,
    };
  }
}
