import { Team } from "../../../domain/entities/team";
import { ITeamRepository } from "../../../domain/repository/team.respository";
import { teamData } from "@/app/backend/tests/data";

export class TeamInMemoryRepository implements ITeamRepository {
  async findById(id: string): Promise<Team> {
    return Team.restore(teamData[+id]);
  }
  async findAll(): Promise<Team[]> {
    throw new Error("Method not implemented.");
  }
}
