import { Prisma } from "@prisma/client";
import { NotFoundError } from "../../../domain/errors/not-found.error";

export function checkNotFoundError(msg: string, e: unknown) {
  if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
    return new NotFoundError(msg);
  } else {
    return e;
  }
}
