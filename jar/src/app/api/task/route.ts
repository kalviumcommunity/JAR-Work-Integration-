import { prisma } from '../../lib/prisma'


export async function POST(req: Request) {
  try {
    const { title, description, projectId, statusId, userId } = await req.json()

    const task = await prisma.$transaction(async (tx) => {
      const newTask = await tx.task.create({
        data: {
          title,
          description,
          projectId,
          statusId,
        },
      })

      await tx.comment.create({
        data: {
          content: 'Task created',
          taskId: newTask.id,
          userId,
        },
      })

      return newTask
    })

    return Response.json(task)
  } catch (error) {
    return new Response('Transaction failed. Rolled back.', { status: 400 })
  }
}
