import { IBetRepository } from "@/app/backend/bet/domain/repository/bet.respository";
import { IBetterRepository } from "@/app/backend/better/domain/repository/better.respository";
import { IGameDayRepository } from "@/app/backend/game-day/domain/repository/game-day.respository";
import { IResultRepository } from "@/app/backend/result/domain/repository/result.respository";
import { Score } from "@/app/backend/score/domain/value-objects/score";

type Props = {
  gameDayRepository: IGameDayRepository;
  betRepository: IBetRepository;
  resultRepository: IResultRepository;
  betterRepository: IBetterRepository;
};

export class GameDayEvaluateUseCase {
  private gameDayRepository: IGameDayRepository;
  private betRepository: IBetRepository;
  private resultRepository: IResultRepository;
  private betterRepository: IBetterRepository;

  constructor(props: Props) {
    this.gameDayRepository = props.gameDayRepository;
    this.betRepository = props.betRepository;
    this.resultRepository = props.resultRepository;
    this.betterRepository = props.betterRepository;
  }

  execute(input: Input): Output {
    const gameDay = this.gameDayRepository.findById(input.gameDayId);
    const bets = this.betRepository.search({ gameDayId: input.gameDayId });
    const result = this.resultRepository.search({
      gameDayId: input.gameDayId,
    });

    const betters = bets.map((b) => {
      const better = this.betterRepository.findById(b.betterId);
      const points = this.sum(b.scores, result.scores);
      return { name: better.name, points };
    });

    betters.sort((a, b) => b.points - a.points);

    return { gameDayId: gameDay.id, betters };
  }

  private sum(bets: Score[], results: Score[]) {
    let points = 0;
    for (let i = 0; i < bets.length; i++) {
      points = points + this.evaluation(bets[i], results[i]);
    }
    return points;
  }

  private evaluation(bet: Score, result: Score) {
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

  private checkScore(bet: Score, result: Score) {
    if (bet.homeGols === result.homeGols && bet.awayGols === result.awayGols) {
      return true;
    }
    return false;
  }
}

export type Input = {
  gameDayId: string;
};

export type Output = {
  gameDayId: string;
  betters: { name: string; points: number }[];
};
