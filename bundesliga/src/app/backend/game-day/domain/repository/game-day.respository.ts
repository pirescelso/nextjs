import { GameDay } from "../entities/game-day";

export interface IGameDayRepository {
  findById(id: string): Promise<GameDay>;
  findAll(): Promise<GameDay[]>;
}
