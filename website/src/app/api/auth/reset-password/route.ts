import { NextResponse } from "next/server";
import {
  verifyPasswordResetToken,
  updateUserPassword,
  deletePasswordResetToken,
} from "@/lib/users";

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { error: "Token and password are required" },
        { status: 400 }
      );
    }

    // Verify token
    const email = await verifyPasswordResetToken(token);

    if (!email) {
      return NextResponse.json(
        { error: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    // Update password
    await updateUserPassword(email, password);

    // Delete used token
    await deletePasswordResetToken(token);

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { error: "Failed to reset password" },
      { status: 500 }
    );
  }
}
