import { Result } from "../../../domain/entities/result";
import { IResultRepository } from "../../../domain/repository/result.respository";
import { resultData } from "@/app/backend/tests/data";

export class ResultInMemoryRepository implements IResultRepository {
  async findById(id: string): Promise<Result> {
    return Result.restore(resultData[+id]);
  }
  async findAll(): Promise<Result[]> {
    throw new Error("Method not implemented.");
  }
  async search(params: { gameDayId: string }): Promise<Result> {
    const selectedRecords = resultData.filter(
      (b) => b.gameDayId === params.gameDayId
    );
    return Result.restore(selectedRecords[0]);
  }
}
