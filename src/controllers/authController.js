const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

// Register User with Role
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!["User", "Patient", "Provider"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword, role });

    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
