import { BetterPrismaRepository } from "./better-prisma.repository";

describe("BetterPrismaRepository Unit Test", () => {
  it("should find a Better", async () => {
    const repository = new BetterPrismaRepository();
    const better = await repository.findById("0");
    expect(better.id).toBe("0");
    expect(better.name).toBe("Better 1");
  });
});
