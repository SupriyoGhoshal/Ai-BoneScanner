const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/user.js");
const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
    const { firstname, lastname, email, password, age, gender } = req.body;
    try {
        if (!firstname ||  !lastname || !email || !password || !age || !gender) {
            return res.status(400).json({ error: "All fields are required." });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ error: "User already exists with this email." });
        }
        const newUser = new User({
            firstname,
            lastname,
            email,
            password,
            age,
            gender,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully." });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required." });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid password." });
        }
        res.status(200).json({ message: "User logged in successfully." });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
