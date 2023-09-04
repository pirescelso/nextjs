import { ResultPrismaRepository } from "./result-prisma.repository";

describe("ResultPrismaRepository Unit Test", () => {
  it("should find a Result", async () => {
    const repository = new ResultPrismaRepository();
    const result = await repository.findById("0");
    expect(result.id).toBe("0");
    expect(result.gameDayId).toBe("0");
    expect(result.scores.length).toBe(2);
  });

  it("should return Result", async () => {
    const repository = new ResultPrismaRepository();
    const result = await repository.search({ gameDayId: "0" });
    expect(result.id).toBe("0");
    expect(result.gameDayId).toBe("0");
    expect(result.scores.length).toBe(2);
  });
});
