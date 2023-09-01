import { LigaInMemoryRepository } from "./liga-in-memory.repository";

describe("LigaInMemoryRepository Unit Test", () => {
  it("should find a Liga", () => {
    const repository = new LigaInMemoryRepository();
    const liga = repository.findById("0");
    expect(liga.id).toBe("0");
    expect(liga.name).toBe("Bundesliga 2023/24");
  });
});
