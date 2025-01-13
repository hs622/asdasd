import { prisma } from "@/prisma";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export default CredentialProvider({
  name: "credentials",
  credentials: {
    email: {
      label: "Email",
      type: "email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    const email: string | undefined = credentials?.email;
    const password: string | undefined = credentials?.password;

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user) {
      console.log({ user }); 
      if (await bcrypt.compare(password!, user.password!)) {
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          image: null,
          firstName: user.firstName,
          lastName: user.lastName,
          emailVerified: user.emailVerified,
        };
      }
    }

    return null;
  },
});
