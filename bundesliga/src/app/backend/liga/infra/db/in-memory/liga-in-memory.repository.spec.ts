import { LigaInMemoryRepository } from "./liga-in-memory.repository";

describe("LigaInMemoryRepository Unit Test", () => {
  it("should find a Liga", async () => {
    const repository = new LigaInMemoryRepository();
    const liga = await repository.findById("0");
    expect(liga.id).toBe("0");
    expect(liga.name).toBe("Bundesliga 2023/24");
  });
});
