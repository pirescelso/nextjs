import { Bet } from "../../../domain/entities/bet";
import { IBetRepository } from "../../../domain/repository/bet.respository";
import { betData } from "@/app/backend/tests/data";

export class BetInMemoryRepository implements IBetRepository {
  findById(id: string): Bet {
    return Bet.restore(betData[+id]);
  }
  findAll(): Bet[] {
    throw new Error("Method not implemented.");
  }
  search(params: { gameDayId: string }): Bet[] {
    const selectedRecords = betData.filter(
      (b) => b.gameDayId === params.gameDayId
    );
    return selectedRecords.map((b) => Bet.restore(b));
  }
}
