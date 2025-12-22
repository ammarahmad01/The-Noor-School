import { NextResponse } from "next/server"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { z } from "zod"
import { prisma } from "@/lib/prisma"

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7).max(20).optional().nullable(),
  subject: z.string().max(200).optional().nullable(),
  message: z.string().min(5, "Message is too short"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = ContactSchema.parse(body)

    const rows = await prisma.$queryRaw<{ id: string }[]>`
      INSERT INTO contact_messages (id, name, email, phone, subject, message, status)
      VALUES (gen_random_uuid(), ${data.name}, ${data.email}, ${data.phone ?? null}, ${data.subject ?? null}, ${data.message}, 'new')
      RETURNING id;
    `

    return NextResponse.json({ success: true, id: rows?.[0]?.id })
  } catch (err: any) {
    if (err?.name === "ZodError") {
      return NextResponse.json({ success: false, error: err.flatten() }, { status: 400 })
    }
    return NextResponse.json({ success: false, error: "Unexpected error" }, { status: 500 })
  }
}
