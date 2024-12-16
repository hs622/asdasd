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
      console.log({account, profile});
      return true;
    }
  },  
  secret: process.env.SECRET_KEY,
  pages: {
    signIn: '/sign-in',
  }
} satisfies NextAuthOptions;