import { Better } from "../../../domain/entities/better";
import { IBetterRepository } from "../../../domain/repository/better.respository";
import { betterData } from "@/app/backend/tests/data";

export class BetterInMemoryRepository implements IBetterRepository {
  findById(id: string): Better {
    return Better.restore(betterData[+id]);
  }
  findAll(): Better[] {
    throw new Error("Method not implemented.");
  }
}
