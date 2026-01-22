import { sendSuccess, sendError } from "@/lib/responseHandler";
import { ERROR_CODES } from "@/lib/errorCodes";

export async function GET() {
  try {
    const tasks = [{ id: 1, title: "Learn Prisma" }];
    return sendSuccess(tasks, "Tasks fetched successfully");
  } catch (err) {
    return sendError(
      "Failed to fetch tasks",
      ERROR_CODES.DATABASE_FAILURE,
      500,
      err
    );
  }
}
