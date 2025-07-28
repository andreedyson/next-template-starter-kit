/**
 * Global configuration for the BeamStart Starter Kit.
 * This config centralizes key app settings such as metadata, links, and others.
 **/

import { AppConfig } from "./types/config";

const config = {
  // REQUIRED
  appName: "Start Dash",
  appDescription:
    "A fullstack Next.js starter kit using TypeScript, NextAuth, Tailwind CSS, shadcn/ui, React Query, and Framer Motion.",
  // Change on production when the app is deployed
  appURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  apiBaseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  appLogo: "",
  gitHubRepo:
    "https://github.com/andreedyson/next-template-starter-starter.git",
  // Used for custom sign-in page, by default it already sets to the built-in
  // /sign-in route from the template. Adjust as needed.
  signInUrl: "/sign-in",
} as AppConfig;

export default config;
