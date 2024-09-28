"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

const PlansPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const { data: plans, isLoading: plansLoading } = api.plan.getAll.useQuery(
    undefined,
    {
      select: (plans) => plans.sort((a, b) => a.order - b.order),
    },
  );
  const selectPlanMutation = api.plan.selectPlan.useMutation();

  const { data: userPlanCheck, isLoading: userCheckLoading } =
    api.user.checkSelectedPlan.useQuery(undefined, {
      enabled: !!session,
    });

  useEffect(() => {
    if (status === "unauthenticated") {
      void router.push("/api/auth/signin");
    } else if (status === "authenticated" && userPlanCheck?.hasPlan) {
      void router.push("/my-dashboard");
    }
  }, [status, router, userPlanCheck]);

  const handleSelectPlan = async (planId: string) => {
    if (!session) {
      await signIn();
      return;
    }

    setSelectedPlan(planId);
    try {
      await selectPlanMutation.mutateAsync({ planId });
      router.push("/my-dashboard");
    } catch (error) {
      console.error("Failed to select plan:", error);
      // Show error message
    }
  };

  if (plansLoading || userCheckLoading) {
    return <div>Loading...</div>;
  }

  if (userPlanCheck?.hasPlan) {
    return null; // This will prevent any flash of content before redirect
  }

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-12 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Perfect Plan
        </motion.h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans?.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl bg-white p-8 shadow-xl ${
                plan.id === plans[1]?.id ? "border-4 border-emerald-500" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.id === plans[1]?.id && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-emerald-500 px-4 py-1 text-sm font-bold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <p className="mb-4 text-4xl font-bold text-emerald-600">
                {plan.price.toLocaleString()}{" "}
                <span className="text-base font-normal text-zinc-500">
                  IQD/month
                </span>
              </p>
              <p className="mb-6 text-zinc-600">
                {plan.mealsPerDay} meals per day
              </p>
              <ul className="mb-8">
                <li className="mb-2 flex items-center">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>
                    {plan.mealOptions === "BASIC"
                      ? "Limited menu options"
                      : "Extended menu options"}
                  </span>
                </li>
                <li className="mb-2 flex items-center">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>{plan.descriotion}</span>
                </li>
              </ul>
              <button
                className={`w-full rounded-full py-3 font-semibold transition ${
                  plan.id === plans[1]?.id
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                }`}
                onClick={() => handleSelectPlan(plan.id)}
                disabled={selectPlanMutation.isPending}
              >
                {selectPlanMutation.isPending && selectedPlan === plan.id
                  ? "Selecting..."
                  : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
