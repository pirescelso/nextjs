export type GameDayProps = {
  id: string;
  ligaId: string;
  round: number;
  games: GameProps[];
};

export type GameProps = {
  gameNumber: number;
  homeId: string;
  awayId: string;
};

export class GameDay {
  id: string;
  ligaId: string;
  round: number;
  games: Game[];

  constructor(props: GameDayProps) {
    this.id = props.id;
    this.ligaId = props.ligaId;
    this.round = props.round;
    this.games = GameDay.createGames(props.games);
  }

  static create(props: Omit<GameDayProps, "id">) {}

  static restore(props: GameDayProps) {
    return new GameDay(props);
  }

  private static createGames(games: GameProps[]) {
    return games.map((g) => new Game(g));
  }
}

export class Game {
  gameNumber: number;
  homeId: string;
  awayId: string;

  constructor(props: GameProps) {
    this.gameNumber = props.gameNumber;
    this.homeId = props.homeId;
    this.awayId = props.awayId;
  }
}
