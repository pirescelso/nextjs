import { Bet, BetProps } from "./bet";
import { BetScoreProps } from "./bet-score";

describe("Bet Unit Test", () => {
  const betScoresProps: BetScoreProps[] = [
    {
      id: "1",
      betId: "1",
      gameId: "1",
      homeGols: 1,
      awayGols: 1,
    },
    {
      id: "2",
      betId: "2",
      gameId: "1",
      homeGols: 2,
      awayGols: 1,
    },
  ];

  const betProps: BetProps = {
    id: "1",
    gameDayId: "1",
    betterId: "1",
    betScores: betScoresProps,
  };

  it("should restore a Bet", () => {
    const bet = Bet.restore(betProps);
    expect(bet.id).toBe(betProps.id);
    expect(bet.gameDayId).toBe(betProps.gameDayId);
    expect(bet.betterId).toBe(betProps.betterId);
    expect(bet.betScores.length).toBe(2);
    expect(bet.betScores[0].homeGols).toBe(1);
    expect(bet.betScores[0].awayGols).toBe(1);
    expect(bet.betScores[1].homeGols).toBe(2);
    expect(bet.betScores[1].awayGols).toBe(1);
  });
});
