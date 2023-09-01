import {
  Score,
  ScoreProps,
} from "@/app/backend/score/domain/value-objects/score";

export type ResultProps = {
  id: string;
  gameDayId: string;
  scores: ScoreProps[];
};

export class Result {
  id: string;
  gameDayId: string;
  scores: Score[];

  constructor(props: ResultProps) {
    this.id = props.id;
    this.gameDayId = props.gameDayId;
    this.scores = Result.createScores(props.scores);
  }

  static create(props: Omit<ResultProps, "id">) {}

  static restore(props: ResultProps) {
    return new Result(props);
  }

  private static createScores(scores: ScoreProps[]) {
    return scores.map((s) => new Score(s));
  }
}
