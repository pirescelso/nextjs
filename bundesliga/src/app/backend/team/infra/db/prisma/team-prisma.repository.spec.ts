import { TeamPrismaRepository } from "./team-prisma.repository";

describe("TeamPrismaRepository Unit Test", () => {
  it("should find a Team", async () => {
    const repository = new TeamPrismaRepository();
    const liga = await repository.findById("0");
    expect(liga.id).toBe("0");
    expect(liga.name).toBe("Team 1");
  });
});
