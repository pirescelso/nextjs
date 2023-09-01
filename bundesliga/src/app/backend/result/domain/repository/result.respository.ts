import { Result } from "../entities/result";

export interface IResultRepository {
  findById(id: string): Result;
  findAll(): Result[];
  search(params: { gameDayId: string }): Result;
}
