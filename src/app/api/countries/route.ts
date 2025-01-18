import { NextResponse } from "next/server";

export default function GET() {
  return NextResponse.json({
    "error": false,
    "data": {
      
    },
  }, { status: 200 });
}
