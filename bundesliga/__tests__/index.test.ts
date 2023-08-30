
class Palpite {
    home: string;
    homeGols: number;
    away: string;
    awayGols: number;

    private constructor (home: string, homeGols: number, away: string, awayGols: number) {
        this.home = home;
        this.homeGols = homeGols;
        this.away = away;
        this.awayGols = awayGols;
    }

    static create (home: string, homeGols: number, away: string, awayGols: number) {
        return new Palpite (home, homeGols, away, awayGols)
    }
}

describe("Player Integration Tests", () => {
    describe("constructor", () => {
      it("should throw an error when name is invalid ", () => {
      
        const palpite = Palpite.create("Bayern", 1, "VfB", 0);
        expect(palpite).toBeDefined();
        console.log(palpite);
      });
    });
  });