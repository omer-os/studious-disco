"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DropdownMenu from "../common/dropdown-menu";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSession();

  const dropdownItems = [
    { label: "Profile", onClick: () => console.log("Profile clicked") },
    { label: "Settings", onClick: () => console.log("Settings clicked") },
    { label: "Logout", onClick: () => signOut() },
  ];
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="text-2xl font-bold text-emerald-600">NutriHome</div>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-zinc-600 transition hover:text-emerald-600"
          >
            Home
          </Link>
          <a
            href="#"
            className="text-zinc-600 transition hover:text-emerald-600"
          >
            Plans
          </a>
          <a
            href="#"
            className="text-zinc-600 transition hover:text-emerald-600"
          >
            About
          </a>
        </div>

        {data?.user ? (
          <DropdownMenu
            trigger={
              <img
                src={data.user.image || "/default-avatar.png"}
                alt={data.user.name || "User Avatar"}
                className="h-10 w-10 rounded-full"
              />
            }
            items={dropdownItems}
          />
        ) : (
          <button
            onClick={() => {
              signIn();
            }}
            className="rounded-full bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
          >
            Login
          </button>
        )}
      </nav>

      {children}

      <footer className="bg-zinc-800 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 NutriHome. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="transition hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-emerald-400">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-emerald-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
