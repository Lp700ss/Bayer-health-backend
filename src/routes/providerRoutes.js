const express = require("express");
const { getAssignedPatients, getPatientHealthData } = require("../controllers/providerController");
const { authenticate, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/patients", authenticate, authorize("Provider"), getAssignedPatients);
router.get("/patients/:patientId", authenticate, authorize("Provider"), getPatientHealthData);


module.exports = router;
