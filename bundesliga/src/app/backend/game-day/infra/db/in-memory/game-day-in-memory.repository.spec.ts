import { GameDayInMemoryRepository } from "./game-day-in-memory.repository";

describe("GameDayInMemoryRepository Unit Test", () => {
  it("should find a GameDay", async () => {
    const repository = new GameDayInMemoryRepository();
    const gameDay = await repository.findById("0");
    expect(gameDay.id).toBe("0");
    expect(gameDay.ligaId).toBe("0");
    expect(gameDay.round).toBe(1);
    expect(gameDay.games.length).toBe(2);
  });
});
