const express = require("express");
const {
  getProfile,
  updateProfile,
  addPatientData,
  updateAllergiesMedication,
  getAllergiesMedication,
} = require("../controllers/patientController");
const { authenticate, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Get Patient Profile
router.get("/profile", authenticate, authorize("Patient"), getProfile);

// ✅ Update Patient Profile
router.put("/profile", authenticate, authorize("Patient"), updateProfile);

// ✅ Add or Update Patient Data
router.post("/data", authenticate, authorize("Patient"), addPatientData);

// ✅ Update Allergies & Current Medication
router.put("/update-health", authenticate, authorize("Patient"), updateAllergiesMedication);

// ✅ Get Allergies & Current Medication
router.get("/get-health", authenticate, authorize("Patient"), getAllergiesMedication);

module.exports = router;
