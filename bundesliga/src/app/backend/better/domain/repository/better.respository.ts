import { Better } from "../entities/better";

export interface IBetterRepository {
  findById(id: string): Better;
  findAll(): Better[];
}
