import { checkNotFoundError } from "@/app/backend/@seedwork/infra/db/prisma/utils";
import { prisma } from "@/app/backend/@prisma/prisma";
import { GameDay } from "../../../domain/entities/game-day";
import { IGameDayRepository } from "../../../domain/repository/game-day.respository";

export class GameDayPrismaRepository implements IGameDayRepository {
  async findById(id: string): Promise<GameDay> {
    let _id = `${id}`;
    const model = await this._get(_id);
    return GameDay.restore({
      ...model,
    });
  }

  async findAll(): Promise<GameDay[]> {
    throw new Error("Method not implemented.");
  }

  private async _get(id: string) {
    try {
      return await prisma.gameDayModel.findUniqueOrThrow({
        where: { id },
      });
    } catch (e) {
      throw checkNotFoundError(`Entity not found using ID ${id}`, e);
    }
  }
}
