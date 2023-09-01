import { GameDay } from "../entities/game-day";

export interface IGameDayRepository {
  findById(id: string): GameDay;
  findAll(): GameDay[];
}
