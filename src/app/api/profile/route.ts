import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { prisma } from "@/prisma";
import { trace } from "console";

type TProfileBody = {
  name: string;
  purpose: string;
  country: string;
  isAdult: boolean;
};

export async function POST(req: NextRequest) {
  const body: TProfileBody = await req.json();
  const session = await getServerSession(authOptions);

  try {
    const updateUser = await prisma.user.update({
      where: { id: session?.user.id },
      data: {
        nickName: body.name,
        role: body.purpose.toUpperCase(),
        isAdult: body.isAdult,
        address: { country: body.country },
      },
    });

    return NextResponse.json(
      {
        message: "Profile updated successfully",
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: true,
        message: "Error while updating profile.",
      },
      { status: 500 }
    );
  }
}
