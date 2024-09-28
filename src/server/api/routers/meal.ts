// In ~/server/api/routers/meals.ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const mealsRouter = createTRPCRouter({
  getTodayMeals: protectedProcedure.query(async ({ ctx }) => {
    // This is a placeholder implementation. You'll need to adjust this
    // based on your actual database schema and business logic.
    const today = new Date();
    const meals = await ctx.db.meal.findMany({
      where: {
        userId: ctx.session.user.id,
        date: {
          gte: new Date(today.setHours(0, 0, 0, 0)),
          lt: new Date(today.setHours(23, 59, 59, 999)),
        },
      },
    });
    return meals;
  }),
});
