import { BetSetFixture } from "../__tests__/index.test";
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
    expect(gameDay.betSets).toEqual(betSets);
  });
});

export class GameDayFixture {
  static betSets() {
    const better1 = new Better({name: "Player 1"})
    const better2 = new Better({name: "Player 2"})
  
    const games = [
      new Game({ home: "Team 1", away: "Team 2" }),
      new Game({ home: "Team 3", away: "Team 4" }),
      new Game({ home: "Team 5", away: "Team 6" }),
      new Game({ home: "Team 7", away: "Team 8" }),
      new Game({ home: "Team 9", away: "Team 10" }),
      new Game({ home: "Team 11", away: "Team 12" }),
      new Game({ home: "Team 13", away: "Team 14" }),
      new Game({ home: "Team 15", away: "Team 16" }),
      new Game({ home: "Team 17", away: "Team 18" }),
      new Game({ home: "Team 19", away: "Team 20" }),
      new Game({ home: "Team 21", away: "Team 22" }),
    ];
    const betsPlayer1 = [
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
    ]
  
    const betsPlayer2 = [
      new Bet({homeGols: 1, awayGols: 0}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 2}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 0}),
      new Bet({homeGols: 0, awayGols: 0}),
      new Bet({homeGols: 2, awayGols: 1}),
      new Bet({homeGols: 2, awayGols: 1}),
      new Bet({homeGols: 2, awayGols: 1}),
      new Bet({homeGols: 1, awayGols: 1}),
      new Bet({homeGols: 0, awayGols: 1}),
    ]
  
    const results = [
      new Result({homeGols: 1, awayGols: 0}),
      new Result({homeGols: 1, awayGols: 1}),
      new Result({homeGols: 1, awayGols: 2}),
      new Result({homeGols: 1, awayGols: 1}),
      new Result({homeGols: 1, awayGols: 0}),
      new Result({homeGols: 0, awayGols: 0}),
      new Result({homeGols: 2, awayGols: 1}),
      new Result({homeGols: 2, awayGols: 1}),
      new Result({homeGols: 2, awayGols: 1}),
      new Result({homeGols: 1, awayGols: 1}),
      new Result({homeGols: 0, awayGols: 1}),
    ]

    return [
      new BetSet({better: better1, games, bets: betsPlayer1, results}),
      new BetSet({better: better2, games, bets: betsPlayer2, results}),
    ]
  }
}
