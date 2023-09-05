import { v4 as uuidv4 } from "uuid";
import {
  ResultScore,
  ResultScoreProps,
  ResultScorePropsJson,
} from "./result-score";

export type ResultProps = {
  id: string;
  gameDayId: string;
  resultScores: ResultScoreProps[];
};

export type ResultPropsJson = Omit<ResultProps, "resultScores"> & {
  resultScores: ResultScorePropsJson[];
};

type PrivateProps = Omit<ResultProps, "resultScores"> & {
  resultScores: ResultScore[];
};

export class Result {
  id: string;
  gameDayId: string;
  resultScores: ResultScore[];

  constructor(props: PrivateProps) {
    this.id = props.id;
    this.gameDayId = props.gameDayId;
    this.resultScores = props.resultScores;
  }

  static create(props: Omit<ResultProps, "id">) {
    const resultScores = props.resultScores.map((r) => ResultScore.create(r));
    return new Result({ ...props, resultScores, id: uuidv4() });
  }

  static restore(props: ResultProps) {
    const resultScores = props.resultScores.map((r) => ResultScore.restore(r));
    return new Result({ ...props, resultScores });
  }

  toJSON(): ResultPropsJson {
    return {
      ...this,
      resultScores: this.resultScores.map((r) => {
        r.toJSON();
      }),
    };
  }
}
