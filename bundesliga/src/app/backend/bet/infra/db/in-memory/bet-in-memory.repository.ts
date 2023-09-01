import { Bet } from "../../../domain/entities/bet";
import { IBetRepository } from "../../../domain/repository/bet.respository";
import { betData } from "@/app/backend/tests/data";

export class BetInMemoryRepository implements IBetRepository {
  async findById(id: string): Promise<Bet> {
    return Bet.restore(betData[+id]);
  }
  async findAll(): Promise<Bet[]> {
    throw new Error("Method not implemented.");
  }
  async search(params: { gameDayId: string }): Promise<Bet[]> {
    const selectedRecords = betData.filter(
      (b) => b.gameDayId === params.gameDayId
    );
    return selectedRecords.map((b) => Bet.restore(b));
  }
}
