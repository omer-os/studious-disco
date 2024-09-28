import React from "react";
import LandingLayout from "~/components/layouts/landing-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LandingLayout>{children}</LandingLayout>;
}
