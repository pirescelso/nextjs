import { Bet } from "@/app/backend/entities/bet";
import { Result } from "@/app/backend/entities/result";
import { BetSet } from "@/app/backend/entities/bet_set";
import { Game } from "../entities/game";
import { Better } from "../entities/better";

describe("Integration Tests", () => {
  it("should create Better", () => {
    const better = new Better({ name: "Celso" });
    expect(better).toBeDefined();
    expect(better.name).toBe("Celso");
  });

  it("should create Bet", () => {
    const bet = new Bet({ homeGols: 1, awayGols: 0 });
    expect(bet).toBeDefined();
    expect(bet.column).toBe("1");
  });

  it("should create Result", () => {
    const reultado = new Result({ homeGols: 1, awayGols: 0 });
    expect(reultado).toBeDefined();
    expect(reultado.column).toBe("1");
  });

  it("should create BetSet", () => {
    const better = BetSetFixture.better("Celso");
    const games = BetSetFixture.games();
    const bets = BetSetFixture.bets();
    const results = BetSetFixture.results()

    const betSet = new BetSet({ better, games, bets, results });
    expect(betSet.better.name).toBe("Celso");
    expect(betSet.points).toBe(30);
  });
});

export class BetSetFixture {
  static better(name: string) {
    return new Better({ name });
  }

  static games() {
    return [
      new Game({ home: "Team 1", away: "Team 2" }),
      new Game({ home: "Team 3", away: "Team 4" }),
      new Game({ home: "Team 5", away: "Team 6" }),
      new Game({ home: "Team 7", away: "Team 8" }),
    ];
  }

  static bets() {
    return [
      new Bet({ homeGols: 1, awayGols: 0 }),
      new Bet({ homeGols: 1, awayGols: 2 }),
      new Bet({ homeGols: 1, awayGols: 0 }),
      new Bet({ homeGols: 1, awayGols: 1 }),
    ];
  }

  static results () {
    return [
      new Result({ homeGols: 1, awayGols: 0 }),
      new Result({ homeGols: 1, awayGols: 2 }),
      new Result({ homeGols: 1, awayGols: 0 }),
      new Result({ homeGols: 1, awayGols: 1 }),
    ];
  }
}
