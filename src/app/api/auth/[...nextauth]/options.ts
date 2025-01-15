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
    // only check if user exists in database when user is created
    async signIn({ account, user }) {
      // if (account?.provider === 'credentials') {
      //   return user.emailVerified as boolean
      // } 

      return true;
    },
    async jwt({ token, user, account, profile }) {    
      if(account) {
        token.sub = user.id;
        token.email = profile?.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.name = profile?.name;
        token.picture = profile?.image;
        token.emailVerified = user.emailVerified as boolean;
        token.role = user.role;
      }

      console.log("token: ");
      console.log(token);
      
      return token;
    },
    async session({ session, token }) {
      console.log("Session called.");
      // console.log({session}, {token});
      console.log(token);
      
      session.user.email = token.email as string;
      session.user.firstName = token.firstName as string;
      session.user.lastName = token.lastName as string;
      // session.user.image = token.picture as string;
      
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