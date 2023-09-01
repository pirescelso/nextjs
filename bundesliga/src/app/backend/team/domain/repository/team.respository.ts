import { Team } from "../entities/team";

export interface ITeamRepository {
  findById(id: string): Team;
  findAll(): Team[];
}
