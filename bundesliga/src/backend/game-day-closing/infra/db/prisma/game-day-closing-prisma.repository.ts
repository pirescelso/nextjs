import {
  checkDuplicatedError,
  checkNotFoundError,
} from "@/backend/@seedwork/infra/db/prisma/utils";
import { prisma } from "@/backend/@prisma/prisma";
import { GameDayClosing } from "../../../domain/entities/game-day-closing";
import { IGameDayClosingRepository } from "../../../domain/repository/game-day-closing.respository";

export class GameDayClosingPrismaRepository
  implements IGameDayClosingRepository
{
  async insert(entity: GameDayClosing): Promise<void> {
    try {
      await prisma.gameDayClosingModel.create({
        data: entity.toJSON(),
      });
    } catch (e) {
      throw checkDuplicatedError(`Entity duplicated with ID ${entity.id}`, e);
    }
  }

  async findById(id: string): Promise<GameDayClosing> {
    let _id = `${id}`;
    const model = await this._get(_id);
    return GameDayClosing.restore({ ...model });
  }

  async findAll(): Promise<GameDayClosing[]> {
    throw new Error("Method not implemented.");
  }

  private async _get(id: string) {
    try {
      return await prisma.gameDayClosingModel.findUniqueOrThrow({
        where: { id },
      });
    } catch (e) {
      throw checkNotFoundError(`Entity not found using ID ${id}`, e);
    }
  }
}
