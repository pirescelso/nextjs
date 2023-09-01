import { GameDay } from "../../../domain/entities/game-day";
import { IGameDayRepository } from "../../../domain/repository/game-day.respository";
import { gameDayData } from "@/app/backend/tests/data";

export class GameDayInMemoryRepository implements IGameDayRepository {
  findById(id: string): GameDay {
    return GameDay.restore(gameDayData[+id]);
  }
  findAll(): GameDay[] {
    throw new Error("Method not implemented.");
  }
}
