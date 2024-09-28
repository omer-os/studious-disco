"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Settings,
  User,
  CreditCard,
  Bell,
  ChevronRight,
  Utensils,
} from "lucide-react";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";

const MyDashboard = () => {
  const { data: session } = useSession();
  const { data: userPlan, isLoading: planLoading } =
    api.plan.getUserPlan.useQuery();
  const { data: todayMeals, isLoading: mealsLoading } =
    api.meals.getTodayMeals.useQuery();

  if (planLoading || mealsLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          className="mb-8 text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, {session?.user?.name}!
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Current Plan Card */}
          <motion.div
            className="rounded-lg bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Current Plan
            </h2>
            <p className="mb-2 text-3xl font-bold text-emerald-600">
              {userPlan?.name}
            </p>
            <p className="mb-4 text-gray-600">
              {userPlan?.mealsPerDay} meals per day
            </p>
            <p className="mb-4 text-gray-600">
              {userPlan?.mealOptions === "BASIC" ? "Basic" : "Extended"} menu
              options
            </p>
            <button className="flex items-center text-emerald-600 hover:text-emerald-700">
              Change Plan <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>

          {/* Today's Meals Card */}
          <motion.div
            className="rounded-lg bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Today's Meals
            </h2>
            {todayMeals?.map((meal, index) => (
              <div key={index} className="mb-3 flex items-center">
                <Utensils className="mr-2 h-5 w-5 text-emerald-500" />
                <span>{meal.name}</span>
              </div>
            ))}
            <button className="mt-4 flex items-center text-emerald-600 hover:text-emerald-700">
              View Full Menu <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div
            className="rounded-lg bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Quick Actions
            </h2>
            <button className="mb-3 flex w-full items-center rounded-md bg-gray-100 p-3 text-left hover:bg-gray-200">
              <Calendar className="mr-3 h-5 w-5 text-emerald-500" />
              Schedule Meals
            </button>
            <button className="mb-3 flex w-full items-center rounded-md bg-gray-100 p-3 text-left hover:bg-gray-200">
              <Bell className="mr-3 h-5 w-5 text-emerald-500" />
              Set Reminders
            </button>
            <button className="flex w-full items-center rounded-md bg-gray-100 p-3 text-left hover:bg-gray-200">
              <CreditCard className="mr-3 h-5 w-5 text-emerald-500" />
              Manage Payment
            </button>
          </motion.div>
        </div>

        {/* Additional Sections */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Meal Calendar */}
          <motion.div
            className="rounded-lg bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Meal Calendar
            </h2>
            {/* Add a calendar component or integration here */}
            <p className="text-gray-600">
              Your upcoming meals will be displayed here.
            </p>
          </motion.div>

          {/* Nutrition Insights */}
          <motion.div
            className="rounded-lg bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Nutrition Insights
            </h2>
            {/* Add nutrition charts or data visualization here */}
            <p className="text-gray-600">
              Your nutrition data and insights will be shown here.
            </p>
          </motion.div>
        </div>

        {/* Settings and Profile Section */}
        <motion.div
          className="mt-8 rounded-lg bg-white p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Settings and Profile
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <button className="flex items-center rounded-md bg-gray-100 p-3 text-left hover:bg-gray-200">
              <User className="mr-3 h-5 w-5 text-emerald-500" />
              Edit Profile
            </button>
            <button className="flex items-center rounded-md bg-gray-100 p-3 text-left hover:bg-gray-200">
              <Settings className="mr-3 h-5 w-5 text-emerald-500" />
              Account Settings
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyDashboard;
