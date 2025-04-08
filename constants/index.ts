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

export const TECH_STACKS = [
  {
    name: "Next.js",
    icon: "/assets/logo/nextjs.svg",
    description:
      "The fullstack React framework with built-in routing, server actions, and optimized performance for modern web apps.",
    docs: "https://nextjs.org/docs",
  },
  {
    name: "TypeScript",
    icon: "/assets/logo/typescript.svg",
    description:
      "A typed superset of JavaScript that helps you catch errors early and build scalable, maintainable applications with confidence.",
    docs: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/logo/tailwind.svg",
    description:
      "Utility-first CSS framework that lets you design directly in your markup with speed and consistency.",
    docs: "https://tailwindcss.com/",
  },
  {
    name: "shadcn/ui",
    icon: "/assets/logo/shadcn.svg",
    description:
      "Accessible and beautifully styled components built on Radix UI and Tailwind, made for real-world applications.",
    docs: "https://ui.shadcn.com/docs",
  },
  {
    name: "PostgreSQL",
    icon: "/assets/logo/postgre.svg",
    description:
      "A powerful, open-source relational database system known for reliability, performance, and robust feature support.",
    docs: "https://www.postgresql.org/docs/",
  },
  {
    name: "Prisma ORM",
    icon: "/assets/logo/prisma.svg",
    description:
      "Type-safe ORM for PostgreSQL that makes working with your database feel intuitive, efficient, and secure.",
    docs: "https://www.prisma.io/docs",
  },
  {
    name: "NextAuth.js",
    icon: "/assets/logo/nextauth.png",
    description:
      "Authentication for Next.js made simple, with built-in support for OAuth providers, credentials, and role-based sessions.",
    docs: "https://next-auth.js.org/getting-started/introduction",
  },
  {
    name: "Framer Motion",
    icon: "/assets/logo/framer.svg",
    description:
      "An animation library for React that brings your UI to life with smooth transitions and interactive animations.",
    docs: "https://motion.dev/docs/react-quick-start",
  },
];
