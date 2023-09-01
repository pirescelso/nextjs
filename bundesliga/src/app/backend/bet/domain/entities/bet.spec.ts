import { Bet } from "./bet";
import { betData } from "@/app/backend/tests/data";

describe("Bet Unit Test", () => {
  it("should restore a Bet", () => {
    const bet = Bet.restore(betData[0]);
    expect(bet.id).toBe(betData[0].id);
    expect(bet.gameDayId).toBe(betData[0].gameDayId);
    expect(bet.betterId).toBe(betData[0].betterId);
    expect(bet.scores.length).toBe(2);
    expect(bet.scores[0].gameNumber).toBe(1);
    expect(bet.scores[0].homeGols).toBe(1);
    expect(bet.scores[0].awayGols).toBe(1);
    expect(bet.scores[1].gameNumber).toBe(2);
    expect(bet.scores[1].homeGols).toBe(1);
    expect(bet.scores[1].awayGols).toBe(1);
  });
});
