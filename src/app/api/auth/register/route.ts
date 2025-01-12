import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { RegisterSchema, DEFAULT_ROLE } from '../../../../../types/zod';
import { prisma } from "@/prisma";
import bcrypt from 'bcryptjs';

type newUserCreateInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  emailVerified: boolean;
  status: boolean | null;
};

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const result = RegisterSchema.safeParse(body);
  let status: number | undefined = undefined;
  let zodErrors = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...ZodError, [issue.path[0]]: issue.message };
      status = 400
    });
  } else {
    const emailCheck = await prisma.user.findUnique({
      where: {
        email: result.data.email!,
      },
    });

    if (!emailCheck) {
      const Hash = await bcrypt.hash(result.data.password!, 10);
      const data: newUserCreateInputs = {
        firstName: result.data.first_name!,
        lastName: result.data.last_name!,
        email: result.data.email!,
        password: Hash,
        role: DEFAULT_ROLE,
        emailVerified: false,
        status: null,
      };

      await prisma.user.create({ data: data });
      status = 201
    } else {
      zodErrors = { ...ZodError, email: "Email already taken." };
      status = 400
    }
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : {
          errors: false,
          redirect: new URL("/prerequisite", request.url),
          message: "Account create successfully.",
        },
    { status }
  );
}