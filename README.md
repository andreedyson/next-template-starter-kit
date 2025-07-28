# 🚀 Start Dash – A Fullstack Next.js Boilerplate

Start Dash is a fullstack starter template built with modern tools and best practices to help you **ship apps faster**. Whether you're building dashboards, SaaS tools, or student projects — this boilerplate gives you a solid foundation with authentication, styling, database, and routing ready to go.

![startdash](https://github.com/user-attachments/assets/f20e7ae9-74c9-4356-b7a4-96022e0cd125)

## 📋 <a name="table">Table of Contents</a>

1. ⚙️ [Technology Used](#tech-stack)
2. 👩‍💻 [Features](#features)
3. 💻 [Available Routes](#routes)
4. ⚡ [Getting Started](#started)
5. 🏛️ [Project Structure](#structure)
6. 📦 [Important Packages](#packages)
7. 🛠️ [Utility Functions](#utils)
8. 🔧 [Scripts](#scripts)

## <a name="tech-stack">⚙️ Technology Used</a>

This project comes pre-configured with:

- ⚙️ **Next.js** - App Router with file-based routing, server actions, and fullstack capability
- ✏️ **Typescript** - Strong typing for scalable and safer code
- 🖼️ **TailwindCSS** - Utility-first CSS framework for fast UI building
- ✒️ **shadcn/ui** - Accessible component library powered by Radix and Tailwind
- 💻 **PostgreSQL** - Reliable and performant relational database
- 📐 **Prisma** - Type-safe ORM for PostgreSQL
- 🔏 **NextAuth** - Authentication with credentials & OAuth support (Google, GitHub, etc.)
- 📲 **Framer Motion** - Modern animation library for smooth UI interactions
- ⚛️ **React Query** - Data fetching and caching for better state management

## <a name="features">✨ Features</a>

- **⚫ Dark Mode Support** - Full support for dark/light themes using Tailwind and `theme-provider`.
- **📱 Responsive Design** - obile-first layout and components that adapt to any screen size.
- **🔐 Role-Based Auth** - NextAuth setup with support for roles (admin/user) and protected routes.
- **🧩 UI with shadcn/ui** - Pre-styled, accessible components ready to use and extend.
- **🧱 Modular Architecture** - Route groups for landing, auth, and dashboard sections using App Router.
- **📦 API & Server Actions**- Includes protected API routes and server actions with session logic.
- **📊 Dummy Dashboard** - Prebuilt dashboard with overview, tasks, users, and settings pages.
- **🌐 OAuth + Credentials** - OAuth flows with Google OAuth and email/password credential provider.
- **🧠 React Query Ready** - Efficient async data fetching, caching, and background updates.
- **🎯 Dev Friendly Setup** - Pre-configured linting, folder structure, and environment management.

## <a name="routes">💻 Available Routes</a>

| **Path**              | **Description**           |
| --------------------- | ------------------------- |
| `/`                   | Landing Page              |
| `/sign-in`            | Login Page                |
| `/register`           | Register Page             |
| `/dashboard`          | Admin Dashboard Page      |
| `/dashboard/users`    | Users list (static table) |
| `/dashboard/tasks`    | Task list with checkboxes |
| `/dashboard/settings` | Profile settings form     |

## <a name="started">⚡ Getting Started</a>

To set up the `Start Dash` template locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/andreedyson/next-template-starter-kit.git
cd next-template-starter-kit
```

2. **Install dependencies**:

```bash
npm install
```

3. **Configure environment variables**:
   Create a .env file in the root directory with the required environment variables. Include your PostgreSQL database credentials, NextAuth configuration (e.g., secret, providers), and any other necessary variables. Copy the example environment config and update values:

```bash
cp .env.example .env.local
# OR
cp .env.example .env
```

```env
# PostgreSQL database URL (use your Supabase or local Postgres)
DATABASE_URL="postgresql://your-user:your-password@db.supabase.co:5432/your-database-name"

# Direct connection to dtabase. Used for migrations (Supabase)
DIRECT_URL=""

# ⚙️ NEXTJS CONFIGURATION
# baseUrl of the application (change when deployed)
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# 🔐 NEXTAUTH CONFIGURATION
# NextAuth.js secret key (generate via)
# openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-key"

# Public URL of your site (used for callbacks)
NEXTAUTH_URL="http://localhost:3000"

# 🔑 NEXTAUTH PROVIDERs (Optional - default used)
# Create at: https://github.com/settings/developers
# Create at: https://console.cloud.google.com
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
GOOGLE_ID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"
```

4. **Migrate the database**:
   Initialize your PostgreSQL database schema with Prisma and ensure your PostgreSQL (or Supabase) DB is up and running:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. **Run the development server**:

```bash
npm run dev
```

6. **Access the template**:
   Open http://localhost:3000 to view the app. Remove the boilerplate comment / unused components depending on your needs.

## <a name="structure">🏛️ Project Structure</a>

```bash
app/
├── (landing)/            → Public site
├── (auth)/               → Sign-in & Register pages
├── dashboard/            → Auth-protected dashboard
├── api/                  → API Routes (e.g. /hello)
components/
├── layout/               → Header, Sidebar, Avatar
├── ui/                   → shadcn/ui components
lib/                      → Prisma, auth, session utils
server/
├── actions/              → Server actions
```

## <a name="packages">📦 Important Packages</a>

| Package                   | Purpose                              |
| ------------------------- | ------------------------------------ |
| **next**                  | Core framework for SSR/SSG/SPA       |
| **@prisma/client**        | ORM client for DB interaction        |
| **next-auth**             | Authentication (credentials + OAuth) |
| **tailwindcss**           | Utility-first CSS styling            |
| **@tanstack/react-query** | Data fetching, caching, server state |
| **shadcn/ui**             | Pre-styled accessible UI components  |
| **framer-motion**         | Page and UI animations               |

## <a name="utils">🛠️ Utility Functions</a>

| File         | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| lib/db.ts    | Exports a singleton Prisma Client                             |
| lib/utils.ts | Tailwind `cn()` helper for conditional class merging and more |

## <a name="scripts">🔧 Scripts</a>

| Script                   | Description                      |
| ------------------------ | -------------------------------- |
| `npm run dev`            | Starts the development server    |
| `npm run build`          | Builds the app for production    |
| `npm run start`          | Starts the production server     |
| `npx prisma studio`      | Opens a local Prisma DB explorer |
| `npx prisma migrate dev` | Applies migrations to local DB   |

## 🔐 Authentication Notes

- Supports credentials login and Google OAuth
- Role-based logic included in session and JWT callbacks
- Customize `authOptions` in `/app/api/[...nextauth]/options.ts`

## 🙌 Credits

Start Dash wouldn't be possible without the amazing tools and open-source communities behind these technologies:

- [**Next.js**](https://nextjs.org/) – React framework for fullstack apps with server actions, routing, and edge-ready performance.
- [**shadcn/ui**](https://ui.shadcn.com/) – Accessible, beautifully designed component library built on Tailwind and Radix UI.
- [**Prisma**](https://www.prisma.io/) – Next-generation ORM for TypeScript and PostgreSQL with powerful query and type safety.
- [**NextAuth.js**](https://next-auth.js.org/) – Authentication for Next.js with credentials, OAuth providers, and flexible session management.
- [**Supabase**](https://supabase.com/) – Open-source Firebase alternative providing hosted PostgreSQL and auth services.
- [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first CSS framework for building fast and responsive UIs.
- [**TypeScript**](https://www.typescriptlang.org/) – Strongly typed superset of JavaScript for scalable and safer development.
- [**React Query**](https://tanstack.com/query/latest) – Hooks-based data fetching, caching, and server state management.
- [**Framer Motion**](https://www.framer.com/motion/) – Animation library for React to create smooth, physics-based transitions.

## Support

Consider giving this template a star ⭐ on GitHub if you find it helpful!

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

Created by [@andreedyson](https://www.github.com/andreedyson)
