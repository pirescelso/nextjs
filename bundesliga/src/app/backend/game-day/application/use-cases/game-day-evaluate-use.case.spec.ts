import { BetInMemoryRepository } from "@/app/backend/bet/infra/db/in-memory/bet-in-memory.repository";
import { GameDayInMemoryRepository } from "@/app/backend/game-day/infra/db/in-memory/game-day-in-memory.repository";
import { GameDayEvaluateUseCase } from "./game-day-evaluate-use.case";
import { ResultInMemoryRepository } from "@/app/backend/result/infra/db/in-memory/result-in-memory.repository";
import { BetterInMemoryRepository } from "@/app/backend/better/infra/db/in-memory/better-in-memory.repository";

describe("GameDayEvaluateUseCase Unit Test", () => {
  it("should evaluate a GameDay", async () => {
    const gameDayRepository = new GameDayInMemoryRepository();
    const betRepository = new BetInMemoryRepository();
    const resultRepository = new ResultInMemoryRepository();
    const betterRepository = new BetterInMemoryRepository();
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
