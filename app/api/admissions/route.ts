import { NextResponse } from "next/server"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { z } from "zod"
import { prisma } from "@/lib/prisma"

const AdmissionsSchema = z.object({
  student_first_name: z.string().min(2),
  student_last_name: z.string().min(2),
  dob: z.string().optional().nullable(), // ISO date string
  gender: z.enum(["male", "female", "other", "prefer_not_to_say"]).optional().nullable(),
  grade_applied_id: z.string().uuid().optional().nullable(),
  parent_name: z.string().min(2),
  parent_phone: z.string().min(7).max(20),
  parent_email: z.string().email(),
  address_text: z.string().optional().nullable(),
  previous_school: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = AdmissionsSchema.parse(body)

    const rows = await prisma.$queryRaw<{ id: string }[]>`
      INSERT INTO admissions_applications (
        id, student_first_name, student_last_name, dob, gender, grade_applied_id,
        parent_name, parent_phone, parent_email, address_text, previous_school, status, notes
      ) VALUES (
        gen_random_uuid(), ${data.student_first_name}, ${data.student_last_name}, ${data.dob ?? null}, ${data.gender ?? null}, ${data.grade_applied_id ?? null},
        ${data.parent_name}, ${data.parent_phone}, ${data.parent_email}, ${data.address_text ?? null}, ${data.previous_school ?? null}, 'submitted', ${data.notes ?? null}
      )
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
