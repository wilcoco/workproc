import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const username = process.env.ADMIN_USERNAME || null;
  const name = process.env.ADMIN_NAME || null;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error('Please provide ADMIN_EMAIL and ADMIN_PASSWORD environment variables');
    process.exit(1);
  }

  const passwordHash = await hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email: email.toLowerCase() },
    update: { passwordHash, username, name, role: 'ADMIN' },
    create: { email: email.toLowerCase(), username, name, passwordHash, role: 'ADMIN' },
  });

  console.log('Seeded admin user:', { id: user.id, email: user.email, username: user.username, name: user.name, role: user.role });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
