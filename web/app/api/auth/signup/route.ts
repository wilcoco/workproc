import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  if (process.env.DISABLE_SIGNUP === "true") {
    return NextResponse.json({ error: "signup-disabled" }, { status: 403 });
  }

  try {
    const { email, username, name, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "missing-fields" }, { status: 400 });
    }
    const emailLc = String(email).toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLc)) {
      return NextResponse.json({ error: "invalid-email" }, { status: 400 });
    }
    if (String(password).length < 6) {
      return NextResponse.json({ error: "weak-password" }, { status: 400 });
    }

    const existingEmail = await prisma.user.findUnique({ where: { email: emailLc } });
    if (existingEmail) {
      return NextResponse.json({ error: "email-taken" }, { status: 409 });
    }

    if (username) {
      const existingUsername = await prisma.user.findUnique({ where: { username } });
      if (existingUsername) {
        return NextResponse.json({ error: "username-taken" }, { status: 409 });
      }
    }

    const passwordHash = await hash(String(password), 10);

    const user = await prisma.user.create({
      data: {
        email: emailLc,
        username: username || null,
        name: name || null,
        passwordHash,
        role: "MEMBER",
      },
      select: { id: true, email: true, username: true, name: true },
    });

    return NextResponse.json({ ok: true, user }, { status: 201 });
  } catch (e) {
    console.error("signup error", e);
    return NextResponse.json({ error: "server-error" }, { status: 500 });
  }
}
