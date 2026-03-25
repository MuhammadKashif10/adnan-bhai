import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = body.name?.toString().trim() ?? "";
    const email = body.email?.toString().trim() ?? "";
    const phone = body.phone?.toString().trim() ?? "";
    const service = body.service?.toString().trim() ?? "";
    const message = body.message?.toString().trim() ?? "";

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const to = "junkpickupdubai10@gmail.com";
    const subject = `New Free Quote Request - ${service}`;

    const text = [
      "You have received a new contact form submission.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? smtpUser,
      to,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error." },
      { status: 500 },
    );
  }
}

