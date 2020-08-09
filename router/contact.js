const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

// create reusable transporter object using the default SMTP transport

const transporter = nodemailer.createTransport({
    debug: true,
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
        console.log("ERROR", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

router.post("/", (req, res) => {
    const { from, subject, text } = req.body;

    const mailData = {
        from: from,
        to: process.env.EMAIL,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            res.send({ error: err });
        } else {
            re.send("OK", info);
        }
    });
    transporter.close();
});

module.exports = router;
