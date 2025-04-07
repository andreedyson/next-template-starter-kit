export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const LANDING_PAGE_LINKS = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Tech Stacks",
    url: "#tech-stacks",
  },
];

export const FEATURES_SECTION = [
  {
    icon: "🧩",
    title: "Modular Architecture",
    description:
      " Route groups for separation between landing, auth, and dashboard views.",
  },
  {
    icon: "🔐",
    title: "Authentication Ready",
    description:
      "Secure sign-in & register flow using NextAuth, with role-based access.",
  },
  {
    icon: "💅",
    title: "Beautiful UI",
    description:
      " Use shadcn/ui components and Tailwind to build fast with consistency.",
  },
  {
    icon: "🗺️",
    title: "Built-in Routing",
    description:
      "Effortlessly navigate your application with Next.js's intuitive file-system routing.",
  },
  {
    icon: "⚙️",
    title: "Optimized Performance",
    description:
      "Built with performance in mind, leveraging Next.js's optimization features.",
  },
  {
    icon: "🧑‍💻",
    title: "Clean Code Structure",
    description:
      "Well-organized and easy-to-understand project structure for maintainability.",
  },
];
