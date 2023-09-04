import { prisma } from "@/backend/@prisma/prisma";
import { initializePrisma } from "@/backend/@seedwork/tests/initialize-prisma";
import { GameDayPrismaRepository } from "./game-day-prisma.repository";

describe("GameDayPrismaRepository Unit Test", () => {
  beforeEach(async () => {
    await initializePrisma();
    await prisma.$transaction([
      prisma.ligaModel.create({
        data: {
          id: "1",
          name: "Bundesliga 2023/24",
        },
      }),
      prisma.teamModel.createMany({
        data: [
          {
            id: "1",
            name: "Team 1",
          },
          {
            id: "2",
            name: "Team 2",
          },
          {
            id: "3",
            name: "Team 3",
          },
          {
            id: "4",
            name: "Team 4",
          },
        ],
      }),
      prisma.gameModel.createMany({
        data: [
          {
            id: "1",
            gameDaylId: "1",
            gameNumber: 1,
            homeId: "1",
            awayId: "2",
          },
          {
            id: "2",
            gameDaylId: "1",
            gameNumber: 2,
            homeId: "3",
            awayId: "4",
          },
        ],
      }),
      prisma.gameDayModel.create({
        data: {
          id: "1",
          round: 1,
          ligaId: "1",
        },
      }),
    ]);
  });

  it("should find a GameDay", async () => {
    const repository = new GameDayPrismaRepository();
    const gameDay = await repository.findById("1");
    expect(gameDay.id).toBe("1");
    expect(gameDay.ligaId).toBe("1");
    expect(gameDay.round).toBe(1);
    expect(gameDay.games.length).toBe(2);
  });
});
