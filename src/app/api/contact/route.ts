import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: Number(process.env.EMAIL_PORT) === 587 ? false : true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const messageOptions = {
        from: `"Nansel’s Coffee" <${process.env.EMAIL_USER}>`,
        replyTo: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO,
        subject: "New Contact Form Submission",
        text: `You have a new contact form submission from ${name} (${email}):\n\n${message}`,
        html: `<p>You have a new contact form submission from <strong>${name}</strong> (${email}):</p><p style="white-space:pre-wrap;margin-top:8px">${message}</p>`,
    };

    try {
        await transporter.sendMail(messageOptions);
        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
