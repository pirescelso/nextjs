import { BetterInMemoryRepository } from "./better-in-memory.repository";

describe("BetterInMemoryRepository Unit Test", () => {
  it("should find a Better", () => {
    const repository = new BetterInMemoryRepository();
    const better = repository.findById("0");
    expect(better.id).toBe("0");
    expect(better.name).toBe("Better 1");
  });
});
