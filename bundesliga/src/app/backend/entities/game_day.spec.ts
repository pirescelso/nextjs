import { Bet } from "./bet";
import { BetSet } from "./bet_set";
import { Better } from "./better";
import { Game } from "./game";
import { GameDay } from "./game_day";
import { Result } from "./result";

describe("GameDay", () => {
  it("should create a GameDay", () => {
    const betSets = GameDayFixture.betSets();
    const gameDay = new GameDay({
      championship: "Bundesliga",
      season: "2023/24",
      round: 1,
      betSets,
    });
    expect(gameDay).toBeDefined();
    expect(gameDay.championship).toBe("Bundesliga");
    expect(gameDay.season).toBe("2023/24");
    expect(gameDay.round).toBe(1);
    expect(gameDay.betSets.length).toBe(2);
    expect(gameDay.betSets).toStrictEqual(betSets);
    expect(gameDay.winner.better.name).toBe("Player 2");
    expect(gameDay.winner.points).toBe(85);
  });
});

export class GameDayFixture {
  static betSets() {
    const betterData = [
      {
        name: "Player 1",
        bets: [
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
        ],
      },
      {
        name: "Player 2",
        bets: [
          { bet: { homeGols: 1, awayGols: 0 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 2 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 0 } },
          { bet: { homeGols: 0, awayGols: 0 } },
          { bet: { homeGols: 2, awayGols: 1 } },
          { bet: { homeGols: 2, awayGols: 1 } },
          { bet: { homeGols: 2, awayGols: 1 } },
          { bet: { homeGols: 1, awayGols: 1 } },
          { bet: { homeGols: 0, awayGols: 1 } },
        ],
      },
    ];

    const gameData = [
      { home: "Team 1", away: "Team 2" },
      { home: "Team 3", away: "Team 4" },
      { home: "Team 5", away: "Team 6" },
      { home: "Team 7", away: "Team 8" },
      { home: "Team 9", away: "Team 10" },
      { home: "Team 11", away: "Team 12" },
      { home: "Team 13", away: "Team 14" },
      { home: "Team 15", away: "Team 16" },
      { home: "Team 17", away: "Team 18" },
      { home: "Team 18", away: "Team 20" },
      { home: "Team 19", away: "Team 22" },
      { home: "Team 21", away: "Team 24" },
    ];

    const resultData = [
      { homeGols: 1, awayGols: 0 },
      { homeGols: 1, awayGols: 1 },
      { homeGols: 1, awayGols: 2 },
      { homeGols: 1, awayGols: 1 },
      { homeGols: 1, awayGols: 0 },
      { homeGols: 0, awayGols: 0 },
      { homeGols: 2, awayGols: 1 },
      { homeGols: 2, awayGols: 1 },
      { homeGols: 2, awayGols: 1 },
      { homeGols: 1, awayGols: 1 },
      { homeGols: 0, awayGols: 1 },
    ];

    const games = gameData.map((g) => new Game(g));
    const results = resultData.map((r) => new Result(r));

    return betterData.map((b) => {
      const better = new Better({ name: b.name });
      const bets = b.bets.map(
        (b) => new Bet({ homeGols: b.bet.homeGols, awayGols: b.bet.awayGols })
      );
      return new BetSet({ better, bets, games, results });
    });
  }
}
