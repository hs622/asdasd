import { ZodError } from "zod";
import { GeneralInformationSchema } from "../../../../types/zod";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const body: unknown = await request.json();  
  const result = GeneralInformationSchema.safeParse(body);
  
  let status: number | undefined = undefined;
  let zodErrors = {};
 
  
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...ZodError, [issue.path[0]]: issue.message };
      status = 400;

      console.log(zodErrors);
    });
  } else {
    const session = await getServerSession(authOptions);
    if (session) {      
      const response = await prisma.generalInformation.create({
        data: {
          userId: session?.user.id as string,
          age: result.data.age,
          gender: result.data.sex as string,
          measurementSystem: result.data.measurementSystem as string,
          ethnicity: result.data.ethnicity as string,
          height: parseInt(result.data.height),
          heightInches: result.data.heightInches
            ? parseInt(result.data.heightInches!)
            : null,
          weight: parseInt(result.data.weight),
        },
      });

      return NextResponse.json({  message: "Success", data: {...response} }, { status: 201 });
    }
  }
}

export async function GET(request: Request) {

  
}
