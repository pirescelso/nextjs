import { prisma } from "@/app/backend/@prisma/prisma";

export async function initializePrisma() {
  await prisma.$transaction([
    prisma.resultScoreModel.deleteMany(),
    prisma.resultModel.deleteMany(),
    prisma.betScoreModel.deleteMany(),
    prisma.betModel.deleteMany(),
    prisma.gameModel.deleteMany(),
    prisma.gameDayModel.deleteMany(),
    prisma.ligaModel.deleteMany(),
    prisma.teamModel.deleteMany(),
    prisma.betterModel.deleteMany(),
  ]);
}
