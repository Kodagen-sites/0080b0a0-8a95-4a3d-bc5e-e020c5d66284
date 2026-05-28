import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mission } = body ?? {};
    if (!name || !email || !mission) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    // Inquiries received here. Wire to Resend / Postmark / SES on deploy.
    return NextResponse.json({ ok: true, received: { name, email, mission } });
  } catch (e: unknown) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Invalid request" },
      { status: 400 }
    );
  }
}
