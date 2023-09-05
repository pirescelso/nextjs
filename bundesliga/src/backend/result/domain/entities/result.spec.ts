import { Result, ResultProps } from "./result";
import { ResultScoreProps } from "./result-score";

describe("Result Unit Test", () => {
  const resultScoresProps: ResultScoreProps[] = [
    {
      id: "1",
      gameId: "1",
      homeGols: 1,
      awayGols: 1,
    },
    {
      id: "2",
      gameId: "1",
      homeGols: 2,
      awayGols: 1,
    },
  ];

  const resultProps: ResultProps = {
    id: "1",
    gameDayId: "1",
    resultScores: resultScoresProps,
  };

  it("should restore a Result", () => {
    const result = Result.restore(resultProps);
    expect(result.id).toBe(resultProps.id);
    expect(result.gameDayId).toBe(resultProps.gameDayId);
    expect(result.resultScores.length).toBe(2);
    expect(result.resultScores[0].homeGols).toBe(1);
    expect(result.resultScores[0].awayGols).toBe(1);
    expect(result.resultScores[1].homeGols).toBe(2);
    expect(result.resultScores[1].awayGols).toBe(1);
  });
});
