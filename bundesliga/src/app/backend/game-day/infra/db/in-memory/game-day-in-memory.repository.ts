import { GameDay } from "../../../domain/entities/game-day";
import { IGameDayRepository } from "../../../domain/repository/game-day.respository";
import { gameDayData } from "@/app/backend/tests/data";

export class GameDayInMemoryRepository implements IGameDayRepository {
  async findById(id: string): Promise<GameDay> {
    return GameDay.restore(gameDayData[+id]);
  }
  async findAll(): Promise<GameDay[]> {
    throw new Error("Method not implemented.");
  }
}
