import { GameDay } from "./game-day";
import { gameDayData } from "@/app/backend/tests/data";

describe("GameDay Unit Test", () => {
  it("should restore a GameDay", () => {
    const gameDay = GameDay.restore(gameDayData[0]);
    expect(gameDay.id).toBe(gameDayData[0].id);
    expect(gameDay.ligaId).toBe(gameDayData[0].ligaId);
    expect(gameDay.round).toBe(gameDayData[0].round);
    expect(gameDay.games.length).toBe(2);
    expect(gameDay.games[0].gameNumber).toBe(1);
    expect(gameDay.games[0].homeId).toBe("0");
    expect(gameDay.games[0].awayId).toBe("1");
    expect(gameDay.games[1].gameNumber).toBe(2);
    expect(gameDay.games[1].homeId).toBe("2");
    expect(gameDay.games[1].awayId).toBe("3");
  });
});
