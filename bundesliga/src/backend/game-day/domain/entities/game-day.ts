import { Game, GameProps, GamePropsJson } from "./game";
import { v4 as uuidv4 } from "uuid";

export type GameDayProps = {
  id: string;
  ligaId: string;
  round: number;
  games: GameProps[];
};

export type GameDayPropsJson = Omit<GameDayProps, "games"> & {
  games: GamePropsJson[];
};

type PrivateProps = Omit<GameDayProps, "games"> & {
  games: Game[];
};

export class GameDay {
  id: string;
  ligaId: string;
  round: number;
  games: Game[];

  constructor(props: PrivateProps) {
    this.id = props.id;
    this.ligaId = props.ligaId;
    this.round = props.round;
    this.games = props.games;
  }

  static create(props: Omit<GameDayProps, "id">) {
    const games = props.games.map((g) => Game.create(g));
    return new GameDay({ ...props, games, id: uuidv4() });
  }

  static restore(props: GameDayProps) {
    const games = props.games.map((g) => Game.restore(g));
    return new GameDay({ ...props, games });
  }

  toJSON(): GameDayPropsJson {
    return {
      ...this,
      games: this.games.map((g) => {
        g.toJSON();
      }),
    };
  }
}
