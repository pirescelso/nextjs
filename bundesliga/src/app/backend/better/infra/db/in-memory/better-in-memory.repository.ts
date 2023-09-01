import { Better } from "../../../domain/entities/better";
import { IBetterRepository } from "../../../domain/repository/better.respository";
import { betterData } from "@/app/backend/tests/data";

export class BetterInMemoryRepository implements IBetterRepository {
  async findById(id: string): Promise<Better> {
    return Better.restore(betterData[+id]);
  }
  async findAll(): Promise<Better[]> {
    throw new Error("Method not implemented.");
  }
}
