const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, helpType, customHelp, budget, message } =
    req.body;

  const finalHelp =
    helpType === "Other (Type Below)" && customHelp
      ? `Other - ${customHelp}`
      : helpType;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "seyreon@gmail.com",
      pass: "ysjqlnxdsecfgzkk", // Use App Password
    },
  });

  const mailOptions = {
    from: "seyreon@gmail.com",
    to: "seyreon@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `
You received a new inquiry from your website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Help Needed With: ${finalHelp}
Estimated Budget: ${budget}

Additional Message:
${message || "(No additional message)"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ success: false, error: "Email failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
