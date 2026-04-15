import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.createMany({
    data: [
      {
        title: 'Sample Task 1',
        description: 'Prepare project',
        completed: false
      },
      {
        title: 'Sample Task 2',
        description: 'Submit technical test',
        completed: true
      }
    ]
  });

  console.log('Seed completed');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
