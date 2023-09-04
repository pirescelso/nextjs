import { prisma } from "@/app/backend/@prisma/prisma";
import { GameDayClosingPrismaRepository } from "./game-day-closing-prisma.repository";
import { GameDayClosing } from "../../../domain/entities/game-day-closing";

describe("GameDayClosingPrismaRepository Unit Test", () => {
  let repository: GameDayClosingPrismaRepository;
  beforeEach(async () => {
    await prisma.gameDayClosingModel.deleteMany();
    repository = new GameDayClosingPrismaRepository();
  });

  it("should inset GameDayClosing", async () => {
    const data = {
      gameDayId: "0",
      winner: {
        name: "Better 1",
        points: 35,
      },
      bettersPoints: [
        { betterId: "0", points: 35 },
        { betterId: "1", points: 0 },
      ],
    };

    const entity = GameDayClosing.create(data);
    await repository.insert(entity);
    const foundModel = await prisma.gameDayClosingModel.findFirstOrThrow({where: {
      id: entity.id
    }})

    expect(foundModel.id).toBe(entity.id);
  });

  // it("should find a Liga", async () => {
  //   const repository = new LigaPrismaRepository();
  //   const liga = await repository.findById("0");
  //   expect(liga.id).toBe("0");
  //   expect(liga.name).toBe("Bundesliga 2023/24");
  // });
});
