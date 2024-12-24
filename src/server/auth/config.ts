import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "../db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: Role;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: Role;
  // }
}

export const authConfig = {
  providers: [Google],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
} satisfies NextAuthConfig;
