import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface LeadPayload {
  name: string;
  phone: string;
  interest: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    if (!body.name || !body.phone || !body.interest) {
      return NextResponse.json(
        { error: 'Name, phone, and interest are required.' },
        { status: 400 }
      );
    }

    await prisma.chat_leads.create({
      data: {
        name: body.name,
        phone: body.phone,
        interest: body.interest,
      },
    });

    console.log('[New Lead Saved]', {
      name: body.name,
      phone: body.phone,
      interest: body.interest,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Lead Save Error]', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
