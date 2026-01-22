import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  completed: z.boolean().optional(),
});

export type TaskInput = z.infer<typeof taskSchema>;
