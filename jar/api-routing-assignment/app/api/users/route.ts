import { handleError } from "@/lib/errorHandler";

export async function GET() {
  try {
    // Simulating an error (like DB failure)
    throw new Error("Database connection failed!");
  } catch (error) {
    return handleError(error, "GET /api/users");
  }
}
