const nodemailer = require('nodemailer');

export default function handler(req: any, res: any) {

    const message = {
        from: req.body.email,
        replyTo: req.body.email,
        to: process.env.GMAIL_EMAIL_RECEIVER,
        subject: req.body.subject,
        text: req.body.message,
        html: `<p>${req.body.message} <br/><br/><br/> ${req.body.name}</p>`,
    };

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    if (req.method === 'POST') {
        transporter.sendMail(message, (err: any, info: any) => {
            if (err) {
                res.status(404).json({
                    error: `Connection refused at ${err.address}`
                });
            } else {
                res.status(250).json({
                    success: `Message delivered to ${info.accepted}`
                });
            }
        });
    }
}