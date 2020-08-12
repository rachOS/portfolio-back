const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

// create reusable transporter object using the default SMTP transport

/* const transporter = nodemailer.createTransport({
    name: "e-nautia",
    port: 587,
    secure: false,
    host: process.env.HOSTMAIL,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
    }
});

router.post("/", (req, res) => {
    const { fullname, user_email, subject, text } = req.body;

    const mailData = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: subject,
        html: `<p>mail from: ${fullname}
        <a type="email" href=${`mailto:${user_email}`}> ${user_email}</a>
        </p> \
        <p>${text}</p>`,
    };

    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            res.send({ error: err });
        } else {
            re.send("OK", info);
        }
    });
    transporter.close();
}); */

module.exports = router;
