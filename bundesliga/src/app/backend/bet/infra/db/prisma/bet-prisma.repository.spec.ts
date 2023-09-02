import { BetPrismaRepository } from "./bet-prisma.repository";

describe("BetPrismaRepository Unit Test", () => {
  it("should find a Bet", async () => {
    const repository = new BetPrismaRepository();
    const bet = await repository.findById("0");
    expect(bet.id).toBe("0");
    expect(bet.betterId).toBe("0");
    expect(bet.gameDayId).toBe("0");
    expect(bet.scores.length).toBe(2);
  });

  it("should search Bet", async () => {
    const repository = new BetPrismaRepository();
    const bets = await repository.search({ gameDayId: "0" });
    expect(bets.length).toBe(2);
  });
});
