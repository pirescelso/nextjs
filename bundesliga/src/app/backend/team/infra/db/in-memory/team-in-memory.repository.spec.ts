import { TeamInMemoryRepository } from "./team-in-memory.repository";

describe("TeamInMemoryRepository Unit Test", () => {
  it("should find a Team", () => {
    const repository = new TeamInMemoryRepository();
    const liga = repository.findById("0");
    expect(liga.id).toBe("0");
    expect(liga.name).toBe("Team 1");
  });
});
