import { BetSet } from "./bet_set";
import { Better } from "./better";

export type GameDayProps = {
  championship: string;
  season: string;
  round: number;
  betSets: BetSet[];
};

type Winner = {
  better: Better;
  points: number;
};

export class GameDay {
  championship: string;
  season: string;
  round: number;
  betSets: BetSet[];
  winner: Winner;

  constructor(props: GameDayProps) {
    props.betSets.sort((a, b) => b.points - a.points);
    this.championship = props.championship;
    this.season = props.season;
    this.round = props.round;
    this.betSets = props.betSets;
    this.winner = {
      better: props.betSets[0].better,
      points: props.betSets[0].points,
    };
  }
}
