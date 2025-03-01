const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    assigned_doc: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },
    allergies: { type: String, default: "" },
    currentMedication: { type: String, default: "" },
    healthTracker: {
      stepsCount: { type: Number, default: 0 },
      activeTime: { type: Number, default: 0 }, // in minutes
      sleepTime: { type: Number, default: 0 },  // in hours
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", PatientSchema);
