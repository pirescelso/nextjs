import { Bet } from "../entities/bet";

export interface IBetRepository {
  findById(id: string): Bet;
  findAll(): Bet[];
  search(params: { gameDayId: string }): Bet[];
}
