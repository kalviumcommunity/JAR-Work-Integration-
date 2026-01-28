import { NextResponse } from "next/server";
import { logger } from "./logger";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleError(error: any, context: string) {
  const isProduction = process.env.NODE_ENV === "production";

  // Log full error internally
  logger.error(`Error in ${context}`, {
    message: error.message,
    stack: isProduction ? "REDACTED" : error.stack,
  });

  // Response sent to client
  return NextResponse.json(
    {
      success: false,
      message: isProduction
        ? "Something went wrong. Please try again later."
        : error.message || "Unknown error",
      ...(isProduction ? {} : { stack: error.stack }),
    },
    { status: 500 }
  );
}
