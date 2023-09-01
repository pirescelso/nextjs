import { TeamInMemoryRepository } from "./team-in-memory.repository";

describe("TeamInMemoryRepository Unit Test", () => {
  it("should find a Team", async () => {
    const repository = new TeamInMemoryRepository();
    const liga = await repository.findById("0");
    expect(liga.id).toBe("0");
    expect(liga.name).toBe("Team 1");
  });
});
