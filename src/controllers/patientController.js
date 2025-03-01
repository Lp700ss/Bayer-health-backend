// const Patient = require("../models/Patient");

// exports.createPatient = async (req, res) => {
//   try {
//     const { name, age, gender, assignedDoctor } = req.body;
//     const patient = new Patient({ name, age, gender, assignedDoctor });
//     await patient.save();

//     res.status(201).json(patient);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getPatients = async (req, res) => {
//   try {
//     const patients = await Patient.find().populate("assignedDoctor");
//     res.json(patients);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// const Patient = require("../models/Patient");

// // View Profile
// exports.getProfile = async (req, res) => {
//   try {
//     const patient = await Patient.findById(req.user._id);
//     if (!patient) return res.status(404).json({ message: "Patient not found" });

//     res.json(patient);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Update Profile
// exports.updateProfile = async (req, res) => {
//   try {
//     const { name, age, gender, allergies, currentMedication } = req.body;

//     const patient = await Patient.findByIdAndUpdate(
//       req.user._id,
//       { name, age, gender, allergies, currentMedication },
//       { new: true }
//     );

//     res.json(patient);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

const Patient = require("../models/Patient");

// View Profile
exports.getProfile = async (req, res) => {
  try {
    const patient = await Patient.findById(req.user._id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, age, gender, allergies, currentMedication } = req.body;

    const patient = await Patient.findByIdAndUpdate(
      req.user._id,
      { name, age, gender, allergies, currentMedication },
      { new: true }
    );

    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Add or Update Patient Data
exports.addPatientData = async (req, res) => {
  try {
    const { name, age, gender, allergies, currentMedication } = req.body;

    let patient = await Patient.findOne({ userId: req.user._id });

    if (patient) {
      return res.status(400).json({ message: "Patient data already exists" });
    }

    patient = new Patient({
      userId: req.user._id,
      name,
      age,
      gender,
      allergies,
      currentMedication,
    });

    await patient.save();
    res.status(201).json({ message: "Patient data added successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Update Allergies & Current Medication
exports.updateAllergiesMedication = async (req, res) => {
  try {
    const { allergies, currentMedication } = req.body;

    const patient = await Patient.findOneAndUpdate(
      { userId: req.user._id },
      { allergies, currentMedication },
      { new: true }
    );

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json({ message: "Updated successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get Allergies & Current Medication
exports.getAllergiesMedication = async (req, res) => {
  try {
    const patient = await Patient.findOne({ userId: req.user._id });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json({
      allergies: patient.allergies,
      currentMedication: patient.currentMedication,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
