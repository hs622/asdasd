import NextAuth, { User, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string?;
      email: string;
      emailVerified: boolean;
      image: string | null;
      role: string?;
    };
  }
  interface User {
    id: string;
    firstName: string;
    lastName: string?;
    email: string;
    emailVerified: boolean;
    image: string | null;
    role: string?;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    firstName: string;
    lastName: string?;
    emailVerified: boolean;
    image: string | null;
    role: string?;
  }
}
