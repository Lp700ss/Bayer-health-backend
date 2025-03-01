const Patient = require("../models/Patient");

// Get Assigned Patients
exports.getAssignedPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ assigned_doc: req.user._id }).select("name healthTracker");
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Individual Patient's HealthTracker Data
exports.getPatientHealthData = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId).select("healthTracker");
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    res.json(patient.healthTracker);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


