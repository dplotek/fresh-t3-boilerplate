import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { usersRouter } from "./routers/users";

export const appRouter = createTRPCRouter({
  users: usersRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
