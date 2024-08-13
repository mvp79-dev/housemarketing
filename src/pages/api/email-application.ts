const nodemailer = require('nodemailer');
const multer = require('multer');
import fs from 'fs';

// Setup multer for handling file uploads
const upload = multer({ dest: '/tmp' });

export const config = {
    api: {
        bodyParser: false // Disable the default body parser
    }
}

const handler = async (req: any, res: any) => {
    const uploadMiddleware = upload.single('file'); // Adjust the field name based on your form

    uploadMiddleware(req, res, (err: any) => {
        if (err) {
            res.status(500).json({ error: 'Error uploading file' });
            return;
        }

        const { email, subject, message, name } = req.body;
        const file = req.file;

        const messageOptions = {
            from: email,
            replyTo: email,
            to: process.env.GMAIL_EMAIL_RECEIVER_APPLICATION,
            subject,
            text: message,
            html: `<p>${message} <br/><br/><br/> ${name}</p>`,
            attachments: [
                {
                    filename: file.originalname,
                    content: fs.readFileSync(file.path),
                }
            ]
        };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            host: 'smtp.gmail.com',
            secure: false,
            auth: {
                user: process.env.GMAIL_EMAIL_ADDRESS,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        transporter.sendMail(messageOptions, (err: any, info: any) => {
            if (err) {
                if (file && file.path) {
                    fs.unlink(file.path, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Failed to delete file:', unlinkErr);
                        }
                    });
                }
                res.status(500).json({ error: `Failed to send email: ${err.message}` });
            } else {
                if (file && file.path) {
                    fs.unlink(file.path, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Failed to delete file:', unlinkErr);
                        }
                    });
                }
                res.status(200).json({ success: `Message sent: ${info.response}` });
            }
        });
    });
};

export default handler;
