import { Liga } from "../entities/liga";

export interface ILigaRepository {
  findById(id: string): Liga;
  findAll(): Liga[];
}
