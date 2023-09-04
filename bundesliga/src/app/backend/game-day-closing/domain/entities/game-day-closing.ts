import { Bet } from "@/app/backend/bet/domain/entities/bet";
import { Better } from "@/app/backend/better/domain/entities/better";
import { Result } from "@/app/backend/result/domain/entities/result";
import { Score } from "@/app/backend/score/domain/value-objects/score";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

type Props = {
  id: string;
  gameDayId: string;
  betsPoints: BetPoints[];
};

type BetPoints = {
  betId: string;
  points: number;
};

type PropsJson = Props;

export class GameDayClosing {
  id: string;
  gameDayId: string;
  betsPoints: BetPoints[];

  constructor(props: Props) {
    this.id = props.id;
    this.gameDayId = props.gameDayId;
    this.betsPoints = props.betsPoints;
  }
  static create(gameDayId: string, bets: Bet[], result: Result) {
    const betsPoints: BetPoints[] = bets.map((b) => {
      const points = GameDayClosing.sum(b.scores, result.scores);
      return { betId: b.id, points };
    });

    betsPoints.sort((a, b) => b.points - a.points);
    return new GameDayClosing({ id: uuidv4(), gameDayId, betsPoints });
  }

  static restore(props: Props) {
    return new GameDayClosing(props);
  }

  private static sum(bets: Score[], results: Score[]) {
    let points = 0;
    for (let i = 0; i < bets.length; i++) {
      points = points + GameDayClosing.evaluation(bets[i], results[i]);
    }
    return points;
  }

  private static evaluation(bet: Score, result: Score) {
    const checkScore = this.checkScore(bet, result);
    if (bet.column === result.column) {
      if (bet.column === "1") {
        if (checkScore) {
          return 5;
        } else {
          return 4;
        }
      } else {
        if (checkScore) {
          return 10;
        } else {
          return 8;
        }
      }
    } else {
      return 0;
    }
  }

  private static checkScore(bet: Score, result: Score) {
    if (bet.homeGols === result.homeGols && bet.awayGols === result.awayGols) {
      return true;
    }
    return false;
  }

  toJSON(): PropsJson {
    return {
      ...this,
    };
  }
}
