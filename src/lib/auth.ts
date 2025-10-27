import NextAuth, { type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ⚠️ DEV ONLY: accetta qualunque email/password non vuota.
        const email = credentials?.email?.trim();
        const password = credentials?.password?.trim();
        if (!email || !password) return null;
        return { id: email, name: email.split("@")[0] || "user", email };
      },
    }),
  ],
  pages: {
    signIn: "/api/auth/signin", // usa il form di default di NextAuth
  },
};
