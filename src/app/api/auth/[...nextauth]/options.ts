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
    async jwt({ token, user, account, profile }) {    
      if(account) {
        token.sub = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.picture = user.image;
        token.role = user.role;
        token.emailVerified = user.emailVerified as boolean;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email as string;
      session.user.firstName = token.firstName as string;
      session.user.lastName = token.lastName as string;
      session.user.emailVerified = token.emailVerified
      session.user.image = token.picture as string;
      
      return session;
    },
  },  
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
    newUser: '/prerequisite',
    signOut: '/',
  }
} satisfies NextAuthOptions;