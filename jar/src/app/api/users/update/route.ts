import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import redis from "@/lib/redis";

export async function POST(req: Request) {
  try {
    const { id, name } = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name },
    });

    // 🔥 Invalidate cache
    await redis.del("users:list");

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    );
  }
}


import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET() {
  try {
    const users = [{ id: 1, name: "Alice" }];
    return sendSuccess(users, "Users fetched successfully");
  } catch (err) {
    return sendError("Failed to fetch users", "USER_FETCH_ERROR", 500, err);
  }
}
