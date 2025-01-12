import NextAuth, { User, type DefaultSession } from 'next-auth';

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token: string;
      name: string;
      email: string;
      phone: string;
      role: string;
    };
  }
  interface User {
    id: string?;
    firstName: string;
    lastName: string?;
    email: string;
    emailVerified: boolean,
    image: string?,
    role: string?;
    
    // token: string;
    // phone: string?;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      token: string;
      name: string;
      email: string;
      phone: string;
      role: string; 
    };
  }
}