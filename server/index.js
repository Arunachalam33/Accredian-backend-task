require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const nodemailer = require("nodemailer");

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/refer", async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail, message } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: { referrerName, referrerEmail, refereeName, refereeEmail, message },
    });

    // Send referral email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: refereeEmail,
      subject: "You’ve been referred to our course!",
      text: `Hello ${refereeName},\n\n${referrerName} has referred you to our amazing course. Join now and enjoy the benefits!\n\nMessage: ${message || "No additional message"}\n\nBest Regards, Team Accredian`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Referral submitted successfully!", data: newReferral });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
