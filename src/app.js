const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
// const goalRoutes = require("./routes/goalRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
// app.use("/api/goals", goalRoutes);
app.use("/api/patient", require("./routes/patientRoutes"));
app.use("/api/provider", require("./routes/providerRoutes"));


app.get("/", (req, res) => {
    res.send("API is running...");
  });

module.exports = app;
