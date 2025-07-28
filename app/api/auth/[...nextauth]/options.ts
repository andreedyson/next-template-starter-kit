/**
 * ⚠️ NextAuth Configuration Template
 * This file sets up credential-based and Google OAuth authentication using NextAuth.
 * You can freely customize the provider setup, session behavior, and callback logic as needed.
 */

import config from "@/config";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // ⚙️ JWT session strategy used to enable stateless sessions
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Max age of 30 days
    updateAge: 24 * 60 * 60, // How often token is updated
  },

  providers: [
    // 🔐 Credentials Provider (email + password)
    CredentialsProvider({
      id: "credentials",
      name: "Email",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // Basic null check
        if (!credentials?.email) return null;

        // Look up user in database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // If no user or no password (e.g., OAuth user), reject
        if (!user || !user.password) return null;

        // Validate hashed password
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordCorrect) return null;

        // Return only necessary fields
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
          createdAt: user.createdAt,
        } as AdapterUser;
      },
    }),

    // 🔐 Google OAuth Provider (must configure .env)
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],

  callbacks: {
    // 👤 Handle new OAuth users on first login
    async signIn({ user, account }) {
      if (account?.provider === "credentials") return true;

      if (!user.email || !user.name) return false;

      const userExist = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!userExist) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
          },
        });
      }

      return true;
    },

    // 🔄 Adds user info to session object
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.createdAt = token.createdAt;
        session.user.role = token.role;
      }
      return session;
    },

    // 🧠 Add custom properties to JWT token
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email ?? undefined },
      });

      if (!dbUser) {
        if (user) token.id = user.id;
        return token;
      }

      return {
        ...token,
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        createdAt: dbUser.createdAt,
        role: dbUser.role,
        image: dbUser.image,
      };
    },

    // ↪️ Redirect after login
    async redirect({ baseUrl }) {
      return `${baseUrl}`;
    },
  },

  // 🌐 Override default sign-in page
  pages: {
    signIn: config.signInUrl,
  },

  // 🔐 NextAuth secret
  secret: process.env.NEXTAUTH_SECRET,
};
