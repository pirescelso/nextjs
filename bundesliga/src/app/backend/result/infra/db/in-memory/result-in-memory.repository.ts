import { Result } from "../../../domain/entities/result";
import { IResultRepository } from "../../../domain/repository/result.respository";
import { resultData } from "@/app/backend/tests/data";

export class ResultInMemoryRepository implements IResultRepository {
  findById(id: string): Result {
    return Result.restore(resultData[+id]);
  }
  findAll(): Result[] {
    throw new Error("Method not implemented.");
  }
  search(params: { gameDayId: string }): Result {
    const selectedRecords = resultData.filter(
      (b) => b.gameDayId === params.gameDayId
    );
    return Result.restore(selectedRecords[0]);
  }
}
