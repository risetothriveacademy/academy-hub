import { NextResponse } from "next/server";
import { getUserByEmail, createPasswordResetToken } from "@/lib/users";
import { sendPasswordResetEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await getUserByEmail(email);

    // Always return success to prevent email enumeration
    // But only send email if user exists
    if (user) {
      const token = await createPasswordResetToken(email);

      // Send password reset email
      const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || "https://risetothrive-academy.com"}/account/reset-password?token=${token}`;

      await sendPasswordResetEmail(email, resetUrl, user.name);
    }

    return NextResponse.json(
      {
        message: "If an account exists with that email, a password reset link has been sent.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
