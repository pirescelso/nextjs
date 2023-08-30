import {Bet} from "@/app/backend/entities/bet"
import {Result} from "@/app/backend/entities/result"
import {Evaluation} from "@/app/backend/entities/evaluation"

describe("Integration Tests", () => {
    describe("constructor", () => {
        it("should create Bet", () => {
            const bet = new Bet({ home: "Bayern", homeGols: 1, away: "VfB", awayGols: 0 });
            expect(bet).toBeDefined();
            expect(bet.home).toBe("Bayern");
            expect(bet.column).toBe("1");
        });

        it("should create Result", () => {
            const reultado = new Result({ home: "Bayern", homeGols: 1, away: "VfB", awayGols: 0 });
            expect(reultado).toBeDefined();
            expect(reultado.home).toBe("Bayern");
            expect(reultado.column).toBe("1");
        });

        it("should evaluate", () => {
            const bet = new Bet({ home: "Bayern", homeGols: 1, away: "VfB", awayGols: 0 });
            const result = new Result({ home: "Bayern", homeGols: 1, away: "VfB", awayGols: 0 });
            const evaluation = new Evaluation({bet, result});
            expect(evaluation.points).toBe(5);
        })
    });
});
