import { ResultInMemoryRepository } from "./result-in-memory.repository";

describe("ResultInMemoryRepository Unit Test", () => {
  it("should find a Result", () => {
    const repository = new ResultInMemoryRepository();
    const result = repository.findById("0");
    expect(result.id).toBe("0");
    expect(result.gameDayId).toBe("0");
    expect(result.scores.length).toBe(2);
  });

  it("should return Result", () => {
    const repository = new ResultInMemoryRepository();
    const result = repository.search({ gameDayId: "0" });
    expect(result.id).toBe("0");
    expect(result.gameDayId).toBe("0");
    expect(result.scores.length).toBe(2);
  });
});
