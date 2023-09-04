import { GameDayClosing } from "../entities/game-day-closing";

export interface IGameDayClosingRepository {
  insert(entity: GameDayClosing): Promise<void>
  findById(id: string): Promise<GameDayClosing>;
  findAll(): Promise<GameDayClosing[]>;
}
