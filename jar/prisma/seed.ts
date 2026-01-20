import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.status.createMany({
    data: [
      { name: "To Do" },
      { name: "In Progress" },
      { name: "Done" }
    ]
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(() => prisma.$disconnect());
