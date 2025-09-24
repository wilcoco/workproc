import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, db: true });
  } catch (e) {
    console.error("DB health check failed", e);
    return NextResponse.json({ ok: true, db: false, error: "no-connection" });
  }
}
