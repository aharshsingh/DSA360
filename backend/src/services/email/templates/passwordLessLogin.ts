export const passwordlessLoginTemplate = (otp: string, username: string) => `
  <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6; padding: 40px;">
    <div style="max-width: 480px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); padding: 32px;">
      <h2 style="color: #1e293b; margin-bottom: 12px; text-align: center;">🚀 Welcome to DSA360</h2>
      <p style="color: #334155; font-size: 15px; text-align: center;">
        Hi <strong>${username}</strong>, here's your one-time login code to access DSA360.
      </p>

      <div style="margin: 28px 0; text-align: center;">
        <span style="
          display: inline-block;
          font-size: 28px;
          letter-spacing: 10px;
          padding: 16px 28px;
          background-color: #eff6ff;
          color: #1d4ed8;
          font-weight: bold;
          border-radius: 8px;
          border: 2px dashed #93c5fd;
        ">
          ${otp}
        </span>
      </div>

      <p style="color: #64748b; font-size: 14px;">
        This OTP is valid for <strong>10 minutes</strong>. Please don’t share this with anyone. If you didn’t request a login, you can safely ignore this email.
      </p>

      <div style="margin-top: 36px; text-align: center;">
        <p style="font-size: 14px; color: #334155;">Happy Coding!</p>
        <p style="font-size: 14px; color: #1e293b;"><strong>— The DSA360 Team</strong></p>
      </div>
    </div>

    <div style="text-align: center; margin-top: 24px; font-size: 12px; color: #94a3b8;">
      &copy; ${new Date().getFullYear()} DSA360. All rights reserved.
    </div>
  </div>
`;
