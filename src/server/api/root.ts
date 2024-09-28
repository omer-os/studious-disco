import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { planRouter } from "./routers/plan";
import { userRouter } from "./routers/user";
import { mealsRouter } from "./routers/meal";

export const appRouter = createTRPCRouter({
  post: postRouter,
  plan: planRouter,
  user: userRouter,
  meals: mealsRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
