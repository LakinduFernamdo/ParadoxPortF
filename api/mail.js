import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({ message: "All fields required" });

    }

    if (fullname.length > 20 || message.length > 100)
     {
      return res.status(400).json({
        message: "Input too long"
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email"
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.HOST_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:process.env.HOST_EMAIL ,
      to: process.env.HOST_EMAIL,
      subject: `Portfolio Message from ${fullname}  (${email})`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}