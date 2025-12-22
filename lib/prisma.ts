import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

// Avoid creating many PrismaClient instances in dev with HMR
const globalForPrisma = globalThis as unknown as { 
  prisma?: PrismaClient
  pool?: Pool
}

// Create connection pool
const pool = globalForPrisma.pool || new Pool({ connectionString: process.env.DATABASE_URL })
if (process.env.NODE_ENV !== "production") globalForPrisma.pool = pool

// Create Prisma adapter
const adapter = new PrismaPg(pool)

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ["error"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
