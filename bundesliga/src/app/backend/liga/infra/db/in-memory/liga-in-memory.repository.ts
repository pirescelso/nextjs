import { Liga } from "../../../domain/entities/liga";
import { ILigaRepository } from "../../../domain/repository/liga.respository";
import { ligaData } from "@/app/backend/tests/data";

export class LigaInMemoryRepository implements ILigaRepository {
  findById(id: string): Liga {
    return Liga.restore(ligaData[+id]);
  }
  findAll(): Liga[] {
    throw new Error("Method not implemented.");
  }
}
