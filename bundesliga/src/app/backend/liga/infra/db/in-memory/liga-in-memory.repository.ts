import { Liga } from "../../../domain/entities/liga";
import { ILigaRepository } from "../../../domain/repository/liga.respository";
import { ligaData } from "@/app/backend/tests/data";

export class LigaInMemoryRepository implements ILigaRepository {
  async findById(id: string): Promise<Liga> {
    return Liga.restore(ligaData[+id]);
  }
  async findAll(): Promise<Liga[]> {
    throw new Error("Method not implemented.");
  }
}
