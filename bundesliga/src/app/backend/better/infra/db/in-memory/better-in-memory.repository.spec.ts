import { BetterInMemoryRepository } from "./better-in-memory.repository";

describe("BetterInMemoryRepository Unit Test", () => {
  it("should find a Better", async () => {
    const repository = new BetterInMemoryRepository();
    const better = await repository.findById("0");
    expect(better.id).toBe("0");
    expect(better.name).toBe("Better 1");
  });
});
