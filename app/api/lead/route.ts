import { NextResponse } from 'next/server';

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

    // Log the lead (replace with database insertion in production)
    console.log('[New Lead]', {
      name: body.name,
      phone: body.phone,
      interest: body.interest,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
