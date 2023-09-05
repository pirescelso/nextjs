import { GameProps } from "./game";
import { GameDay, GameDayProps } from "./game-day";

describe("GameDay Unit Test", () => {
  const gamesProps: GameProps[] = [
    {
      id: "1",
      gameDaylId: "1",
      gameNumber: 1,
      homeId: "0",
      awayId: "1",
    },
    {
      id: "2",
      gameDaylId: "2",
      gameNumber: 2,
      homeId: "2",
      awayId: "3",
    },
  ];

  const gameDayProps: GameDayProps = {
    id: "1",
    ligaId: "1",
    round: 1,
    games: gamesProps,
  };

  it("should restore a GameDay", () => {
    const gameDay = GameDay.restore(gameDayProps);
    expect(gameDay.id).toBe(gameDayProps.id);
    expect(gameDay.ligaId).toBe(gameDayProps.ligaId);
    expect(gameDay.round).toBe(gameDayProps.round);
    expect(gameDay.games.length).toBe(2);
    expect(gameDay.games[0].gameNumber).toBe(1);
    expect(gameDay.games[0].homeId).toBe("0");
    expect(gameDay.games[0].awayId).toBe("1");
    expect(gameDay.games[1].gameNumber).toBe(2);
    expect(gameDay.games[1].homeId).toBe("2");
    expect(gameDay.games[1].awayId).toBe("3");
  });

  it("should create a GameDay", () => {
    const gameDay = GameDay.create(gameDayProps);
    expect(gameDay.id).not.toBe(gameDayProps.id);
    expect(gameDay.ligaId).toBe(gameDayProps.ligaId);
    expect(gameDay.round).toBe(gameDayProps.round);
    expect(gameDay.games.length).toBe(2);
    expect(gameDay.games[0].id).toBeDefined();
    console.log(gameDay.games[0].id);
    expect(gameDay.games[0].id).not.toBe("1");
    expect(gameDay.games[0].gameNumber).toBe(1);
    expect(gameDay.games[0].homeId).toBe("0");
    expect(gameDay.games[0].awayId).toBe("1");
    expect(gameDay.games[1].id).toBeDefined();
    expect(gameDay.games[0].id).not.toBe("2");
    expect(gameDay.games[1].gameNumber).toBe(2);
    expect(gameDay.games[1].homeId).toBe("2");
    expect(gameDay.games[1].awayId).toBe("3");
  });
});
