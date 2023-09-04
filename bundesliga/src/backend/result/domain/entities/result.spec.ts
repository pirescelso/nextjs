import { Result } from "./result";
import { betData } from "@/backend/tests/data.spec";

describe("Result Unit Test", () => {
  it("should restore a Result", () => {
    const result = Result.restore(betData[0]);
    expect(result.id).toBe(betData[0].id);
    expect(result.gameDayId).toBe(betData[0].gameDayId);
    expect(result.scores.length).toBe(2);
    expect(result.scores[0].gameNumber).toBe(1);
    expect(result.scores[0].homeGols).toBe(1);
    expect(result.scores[0].awayGols).toBe(1);
    expect(result.scores[1].gameNumber).toBe(2);
    expect(result.scores[1].homeGols).toBe(1);
    expect(result.scores[1].awayGols).toBe(1);
  });
});
