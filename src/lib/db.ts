import { PrismaClient } from '../generated/client'

const globalForPrisma = globalThis as unknown as {
  prisma_v15: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma_v15 ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma_v15 = db
