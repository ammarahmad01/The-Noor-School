import { NextResponse } from "next/server"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { z } from "zod"
import { prisma } from "@/lib/prisma"

const FranchiseSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional().nullable(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = FranchiseSchema.parse(body)

    const rows = await prisma.$queryRaw<{ id: string }[]>`
      INSERT INTO franchise_inquiries (id, name, email, phone, city, message, status)
      VALUES (gen_random_uuid(), ${data.name}, ${data.email}, ${data.phone}, ${data.city}, ${data.message ?? null}, 'pending')
      RETURNING id;
    `

    return NextResponse.json({ success: true, id: rows?.[0]?.id })
  } catch (err: any) {
    if (err?.name === "ZodError") {
      return NextResponse.json({ success: false, error: err.flatten() }, { status: 400 })
    }
    return NextResponse.json({ success: false, error: { message: "Unexpected error" } }, { status: 500 })
  }
}
