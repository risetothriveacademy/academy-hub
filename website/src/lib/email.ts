import nodemailer from "nodemailer";

// Email configuration
// For development, you can use a service like Ethereal Email
// For production, use services like SendGrid, AWS SES, or SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST || "smtp.ethereal.email",
  port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendPasswordResetEmail(
  to: string,
  resetUrl: string,
  name: string
) {
  const mailOptions = {
    from: process.env.EMAIL_FROM || "Rise to Thrive Academy <noreply@risetothrive-academy.com>",
    to,
    subject: "Reset Your Password - Rise to Thrive Academy",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Reset Your Password</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0097B2 0%, #DB910F 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Rise to Thrive Academy</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #3B3B3B; margin-top: 0;">Reset Your Password</h2>

            <p>Hi ${name},</p>

            <p>We received a request to reset your password for your Rise to Thrive Academy account.</p>

            <p>Click the button below to reset your password:</p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" style="background: linear-gradient(135deg, #0097B2 0%, #DB910F 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; display: inline-block; font-weight: bold; font-size: 16px;">Reset Password</a>
            </div>

            <p style="color: #666; font-size: 14px;">
              Or copy and paste this link into your browser:<br>
              <a href="${resetUrl}" style="color: #0097B2; word-break: break-all;">${resetUrl}</a>
            </p>

            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              This link will expire in 1 hour for security reasons.
            </p>

            <p style="color: #666; font-size: 14px;">
              If you didn't request this password reset, you can safely ignore this email. Your password will not be changed.
            </p>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p style="color: #999; font-size: 12px; text-align: center;">
              Rise to Thrive Academy<br>
              Faith-centered transformation programs<br>
              © ${new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
Hi ${name},

We received a request to reset your password for your Rise to Thrive Academy account.

Click this link to reset your password:
${resetUrl}

This link will expire in 1 hour for security reasons.

If you didn't request this password reset, you can safely ignore this email. Your password will not be changed.

Rise to Thrive Academy
Faith-centered transformation programs
© ${new Date().getFullYear()} All rights reserved
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent to:", to);
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw new Error("Failed to send email");
  }
}

export async function sendWelcomeEmail(to: string, name: string) {
  const mailOptions = {
    from: process.env.EMAIL_FROM || "Rise to Thrive Academy <noreply@risetothrive-academy.com>",
    to,
    subject: "Welcome to Rise to Thrive Academy!",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Rise to Thrive Academy</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0097B2 0%, #DB910F 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Rise to Thrive Academy!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #3B3B3B; margin-top: 0;">Hi ${name}!</h2>

            <p>Thank you for joining Rise to Thrive Academy. We're thrilled to have you on this transformational journey.</p>

            <p>Your account has been created successfully. You can now:</p>

            <ul style="color: #666;">
              <li>Access our faith-based mini-courses</li>
              <li>Enroll in transformation programs</li>
              <li>Track your progress</li>
              <li>Join our community</li>
            </ul>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://risetothrive-academy.com/account/login" style="background: linear-gradient(135deg, #0097B2 0%, #DB910F 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; display: inline-block; font-weight: bold; font-size: 16px;">Get Started</a>
            </div>

            <p style="color: #666; font-size: 14px;">
              If you have any questions or need support, don't hesitate to reach out.
            </p>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p style="color: #999; font-size: 12px; text-align: center;">
              Rise to Thrive Academy<br>
              Faith-centered transformation programs<br>
              © ${new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent to:", to);
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    // Don't throw error for welcome email - it's not critical
  }
}
