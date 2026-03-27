import express, { request } from "express"
import nodemailer from "nodemailer"

const router = express.Router();

router.post("/", async (req, res) => {

    const { fullname, email, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO,
            subject: `New message from ${fullname}`,
            text: `
              Name: ${fullname}
              Email: ${email}

               Message:
                 ${message}`,
        })
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
        console.log(error.message)
    }

});
export default router;