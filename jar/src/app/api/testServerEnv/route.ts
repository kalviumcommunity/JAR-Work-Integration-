import { NextResponse } from "next/server";

export async function GET() {
  const dbUrl = process.env.DATABASE_URL;

  return NextResponse.json({
    message: "Server has access to DATABASE_URL",
    dbUrl: dbUrl ? "✅ Available" : "❌ Missing"
  });
}
