export type GameProps = {
  home: string;
  away: string;
};

export class Game {
  home: string;
  away: string;

  constructor(props: GameProps) {
    this.home = props.home;
    this.away = props.away;
  }
}
