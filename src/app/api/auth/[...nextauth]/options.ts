import { NextAuthOptions } from "next-auth";
import googleProvider from "./providers/googleProvider"; 
import credentialProvider from "./providers/credentialProvider";

import { PrismaClient } from "@prisma/client"; 
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    googleProvider,
    credentialProvider,
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // if (account?.provider === "google") {
      //   return profile.email_verified
      // }
      console.log("SignIn: ");
      console.log({account}, {profile});

      return true;
    },
    async jwt({ token }) {
      // Ensure correct token structure
      return token;
    },
    async session({ session, token }) {      
      session.user.name = token.name as string;
      return session;
    },
  },  
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
    newUser: '/sign-up',
    signOut: '/',
  }
} satisfies NextAuthOptions;