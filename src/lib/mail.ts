import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vyquy633@gmail.com',
    pass: 'tmbwwcizvetibzle',
  },
})

export async function sendOTP(to: string, code: string) {
  const mailOptions = {
    from: '"DryViet Admin" <vyquy633@gmail.com>',
    to,
    subject: 'Mã xác thực đăng nhập DryViet SEO Dashboard',
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #0c0a09; text-align: center;">Xác thực Quản trị viên</h2>
        <p>Chào bạn,</p>
        <p>Đây là mã OTP để truy cập vào <strong>SEO & UX Dashboard</strong> của DryViet:</p>
        <div style="background: #f4f4f5; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #0c0a09; border-radius: 8px; margin: 20px 0;">
          ${code}
        </div>
        <p style="font-size: 13px; color: #71717a;">Mã này sẽ hết hạn trong vòng 10 phút. Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="text-align: center; font-size: 12px; color: #a1a1aa;">&copy; 2026 Vietnam Cuong Thinh Co., Ltd</p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}
