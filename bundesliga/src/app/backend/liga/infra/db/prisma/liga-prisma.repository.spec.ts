// import { prisma } from "@/app/backend/prisma/prisma";
import { LigaPrismaRepository } from "./liga-prisma.repository";

describe("LigaPrismaRepository Unit Test", () => {
  // beforeEach(async () => {
  //   await prisma.ligaModel.deleteMany();
  //   await prisma.ligaModel.create({ data: { id: "0", name: "Bundesliga 2023/24" } });
  // });
  it("should find a Liga", async () => {
    const repository = new LigaPrismaRepository();
    const liga = await repository.findById("0");
    expect(liga.id).toBe("0");
    expect(liga.name).toBe("Bundesliga 2023/24");
  });
});
