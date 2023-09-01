import { ResultInMemoryRepository } from "./result-in-memory.repository";

describe("ResultInMemoryRepository Unit Test", () => {
  it("should find a Result", async () => {
    const repository = new ResultInMemoryRepository();
    const result = await repository.findById("0");
    expect(result.id).toBe("0");
    expect(result.gameDayId).toBe("0");
    expect(result.scores.length).toBe(2);
  });

  it("should return Result", async () => {
    const repository = new ResultInMemoryRepository();
    const result = await repository.search({ gameDayId: "0" });
    expect(result.id).toBe("0");
    expect(result.gameDayId).toBe("0");
    expect(result.scores.length).toBe(2);
  });
});
