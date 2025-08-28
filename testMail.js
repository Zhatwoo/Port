import nodemailer from "nodemailer";
import dotenv from "dotenv";

// load .env.local
dotenv.config({ path: ".env.local" });

async function testMail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("✅ Gmail login successful");
  } catch (err) {
    console.error("❌ Login failed:", err);
  }
}

testMail();
