export const ligaData = [
  { id: "0", name: "Bundesliga 2023/24" }
]

export const betterData = [
  { id: "0", name: "Better 1" },
  { id: "1", name: "Better 2" },
];

export const teamData = [
  { id: "0", name: "Team 1" },
  { id: "1", name: "Team 2" },
  { id: "2", name: "Team 3" },
  { id: "3", name: "Team 4" },
];

export const gameDayData = [
  {
    id: "0",
    ligaId: "0",
    round: 1,
    games: [
      { gameNumber: 1, homeId: "0", awayId: "1" },
      { gameNumber: 2, homeId: "2", awayId: "3" },
    ],
  },
];

export const betData = [
  {
    id: "0",
    gameDayId: "0",
    betterId: "0",
    bets: [
      { gameNumber: 1, homeGols: 1, awayGols: 1 },
      { gameNumber: 2, homeGols: 1, awayGols: 1 },
    ],
  },
  {
    id: "1",
    gameDayId: "0",
    betterId: "1",
    bets: [
      { gameNumber: 1, homeGols: 2, awayGols: 1 },
      { gameNumber: 2, homeGols: 1, awayGols: 2 },
    ],
  },
];

export const resultData = [
  {
    id: "0",
    round: 1,
    games: [
      { gameNumber: 1, homeId: "0", awayId: "1" },
      { gameNumber: 2, homeId: "2", awayId: "3" },
    ],
  },
]

const betterData1 = [
  {
    name: "Player 1",
    bets: [
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
    ],
  },
  {
    name: "Player 2",
    bets: [
      { bet: { homeGols: 1, awayGols: 0 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 2 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 0 } },
      { bet: { homeGols: 0, awayGols: 0 } },
      { bet: { homeGols: 2, awayGols: 1 } },
      { bet: { homeGols: 2, awayGols: 1 } },
      { bet: { homeGols: 2, awayGols: 1 } },
      { bet: { homeGols: 1, awayGols: 1 } },
      { bet: { homeGols: 0, awayGols: 1 } },
    ],
  },
];

const gameData1 = [
  { home: "Team 1", away: "Team 2" },
  { home: "Team 3", away: "Team 4" },
  { home: "Team 5", away: "Team 6" },
  { home: "Team 7", away: "Team 8" },
  { home: "Team 9", away: "Team 10" },
  { home: "Team 11", away: "Team 12" },
  { home: "Team 13", away: "Team 14" },
  { home: "Team 15", away: "Team 16" },
  { home: "Team 17", away: "Team 18" },
  { home: "Team 18", away: "Team 20" },
  { home: "Team 19", away: "Team 22" },
  { home: "Team 21", away: "Team 24" },
];

const resultData1 = [
  { homeGols: 1, awayGols: 0 },
  { homeGols: 1, awayGols: 1 },
  { homeGols: 1, awayGols: 2 },
  { homeGols: 1, awayGols: 1 },
  { homeGols: 1, awayGols: 0 },
  { homeGols: 0, awayGols: 0 },
  { homeGols: 2, awayGols: 1 },
  { homeGols: 2, awayGols: 1 },
  { homeGols: 2, awayGols: 1 },
  { homeGols: 1, awayGols: 1 },
  { homeGols: 0, awayGols: 1 },
];
