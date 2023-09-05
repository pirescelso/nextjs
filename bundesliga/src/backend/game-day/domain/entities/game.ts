import { v4 as uuidv4 } from "uuid";

export type GameProps = {
  id: string;
  gameDaylId: string;
  gameNumber: number;
  homeId: string;
  awayId: string;
};

export type GamePropsJson = GameProps;

export class Game {
  id: string;
  gameDaylId: string;
  gameNumber: number;
  homeId: string;
  awayId: string;

  constructor(props: GameProps) {
    this.id = props.id;
    this.gameDaylId = props.gameDaylId;
    this.gameNumber = props.gameNumber;
    this.homeId = props.homeId;
    this.awayId = props.awayId;
  }

  static create(props: Omit<GameProps, "id">) {
    return new Game({ ...props, id: uuidv4() });
  }

  static restore(props: GameProps) {
    return new Game(props);
  }

  toJSON(): GamePropsJson {
    return {
      ...this,
    };
  }
}
