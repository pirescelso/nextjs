import { BetSet } from "./bet_set";

export type GameDayProps = {
  championship: string;
  season: string;
  round: number;
  betSets: BetSet[];
};

export class GameDay {
  championship: string;
  season: string;
  round: number;
  betSets: BetSet[];

  constructor(props: GameDayProps) {
    this.championship = props.championship;
    this.season = props.season;
    this.round = props.round;
    this.betSets = props.betSets;
  }
}
