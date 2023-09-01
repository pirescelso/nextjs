import { BetInMemoryRepository } from "./bet-in-memory.repository";

describe("BetInMemoryRepository Unit Test", () => {
  it("should find a Bet", () => {
    const repository = new BetInMemoryRepository();
    const bet = repository.findById("0");
    expect(bet.id).toBe("0");
    expect(bet.betterId).toBe("0");
    expect(bet.gameDayId).toBe("0");
    expect(bet.scores.length).toBe(2);
  });

  it("should search Bet", () => {
    const repository = new BetInMemoryRepository();
    const bets = repository.search({ gameDayId: "0" });
    expect(bets.length).toBe(2);
  });
});
