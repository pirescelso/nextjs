import { Bet } from "@/backend/bet/domain/entities/bet";
import { GameDayClosing } from "./game-day-closing";
import { validate as uuidValidate } from "uuid";
import { Result } from "@/backend/result/domain/entities/result";

describe("GameDayClosing Unit Test", () => {
  it("should restore a GameDayClosing", () => {
    const data = {
      id: "0",
      gameDayId: "0",
      betsPoints: [
        { betId: "0", points: 35 },
        { betId: "1", points: 0 },
      ],
    };

    const entity = GameDayClosing.restore(data);
    expect(entity.id).toBe("0");
    expect(entity.gameDayId).toBe("0");
    expect(entity.betsPoints.length).toBe(2);
  });

  it("should create a GameDayClosing", () => {
    const data = {
      gameDayId: "0",
      bets: [
        Bet.restore({
          id: "0",
          betterId: "0",
          gameDayId: "0",
          scores: [
            { gameNumber: 1, homeGols: 1, awayGols: 1 },
            { gameNumber: 2, homeGols: 1, awayGols: 1 },
          ],
        }),
        Bet.restore({
          id: "1",
          betterId: "1",
          gameDayId: "0",
          scores: [
            { gameNumber: 1, homeGols: 2, awayGols: 1 },
            { gameNumber: 1, homeGols: 2, awayGols: 1 },
          ],
        }),
      ],
      result: Result.restore({
        id: "0",
        gameDayId: "0",
        scores: [
          { gameNumber: 1, homeGols: 2, awayGols: 1 },
          { gameNumber: 2, homeGols: 1, awayGols: 1 },
        ],
      }),
    };

    const entity = GameDayClosing.create(
      data.gameDayId,
      data.bets,
      data.result
    );
    expect(uuidValidate(entity.id)).toBeTruthy();
    expect(entity.gameDayId).toBe("0");
    expect(entity.betsPoints.length).toBe(2);
    console.log(entity);
  });
});
