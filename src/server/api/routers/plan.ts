import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const planRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.plan.findMany({
      orderBy: { order: "asc" },
    });
  }),

  getUserPlan: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      include: { selectedPlan: true },
    });
    return user?.selectedPlan ?? null;
  }),

  selectPlan: protectedProcedure
    .input(z.object({ planId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { selectedPlanid: input.planId },
      });
    }),
});
