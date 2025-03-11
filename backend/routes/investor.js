const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const PendingUser = require("../models/pending_user");
const Investor = require("../models/investors");

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


router.post("/approve/:id", async (req, res) => {
    try {
        const pendingInvestor = await PendingUser.findById(req.params.id);
        if (!pendingInvestor) {
            return res.status(404).json({ message: "Investor not found" });
        }

       
        const newInvestor = new Investor({
            fullName: pendingInvestor.fullName,
            email: pendingInvestor.email,
            phoneNumber: pendingInvestor.phoneNumber,
            username: pendingInvestor.username,
            password: pendingInvestor.password, 
            address: pendingInvestor.address,
            role: pendingInvestor.role,
            governmentId: pendingInvestor.governmentId
        });

        await newInvestor.save();
        await PendingUser.findByIdAndDelete(req.params.id);

       
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: pendingInvestor.email,
            subject: "Your Investo Registration is Approved!",
            html: `
                <h2>Welcome, ${pendingInvestor.fullName}!</h2>
                <p>Congratulations! Your registration as an investor on Investo has been approved.</p>
                <p>You can now log in to your account and start investing.</p>
                <p><a href="http://localhost:3000/login">Login Here</a></p>
                <p>Best Regards, <br> Investo Team</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            return res.status(500).json({ message: "Investor approved, but email failed to send" });
        }

        res.status(200).json({ message: "Investor approved successfully and email sent" });
    } catch (error) {
        console.error("Error approving investor:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
