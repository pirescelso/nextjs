import { Team } from "../../../domain/entities/team";
import { ITeamRepository } from "../../../domain/repository/team.respository";
import { teamData } from "@/app/backend/tests/data";

export class TeamInMemoryRepository implements ITeamRepository {
  findById(id: string): Team {
    return Team.restore(teamData[+id]);
  }
  findAll(): Team[] {
    throw new Error("Method not implemented.");
  }
}
