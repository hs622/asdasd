import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    "error": false,
    "data": {},
  }, { status: 200 });
}
