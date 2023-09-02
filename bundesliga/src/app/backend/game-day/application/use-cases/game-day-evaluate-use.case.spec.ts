import { BetPrismaRepository } from "@/app/backend/bet/infra/db/prisma/bet-prisma.repository";
import { GameDayPrismaRepository } from "@/app/backend/game-day/infra/db/prisma/game-day-prisma.repository";
import { GameDayEvaluateUseCase } from "./game-day-evaluate-use.case";
import { ResultPrismaRepository } from "@/app/backend/result/infra/db/prisma/result-prisma.repository";
import { BetterPrismaRepository } from "@/app/backend/better/infra/db/prisma/better-prisma.repository";

describe("GameDayEvaluateUseCase Unit Test", () => {
  it("should evaluate a GameDay", async () => {
    const gameDayRepository = new GameDayPrismaRepository();
    const betRepository = new BetPrismaRepository();
    const resultRepository = new ResultPrismaRepository();
    const betterRepository = new BetterPrismaRepository();
    const usecase = new GameDayEvaluateUseCase({
      gameDayRepository,
      betRepository,
      resultRepository,
      betterRepository,
    });

    const output = await usecase.execute({ gameDayId: "0" });
    console.log(output);
  });
});
