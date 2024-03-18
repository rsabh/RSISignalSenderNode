const nodemailer = require('nodemailer');

async function sendEmail(subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "recipient@example.com", // Set recipient
        subject: subject,
        text: text,
    });

    console.log("Email sent: %s", info.messageId);
}

module.exports = { sendEmail };