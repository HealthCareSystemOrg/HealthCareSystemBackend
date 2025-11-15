const { Patient } = require("../models/Patient");

// Create new patient
const createPatient = async (req, res) => {
  try {
    const { name, age, gender, phone, address, medicalHistory } = req.body;

    const patient = await Patient.create({
      name,
      age,
      gender,
      phone,
      address,
      medicalHistory,
    });

    return res.status(201).json({
      success: true,
      message: "Patient created successfully",
      patient,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to create patient" });
  }
};

// Get all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    return res.status(200).json({ success: true, patients });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to fetch patients" });
  }
};

// Get single patient
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ success: false, message: "Patient not found" });
    }

    return res.status(200).json({ success: true, patient });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to fetch patient" });
  }
};

// Update patient
const updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({ success: false, message: "Patient not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Patient updated successfully",
      patient: updatedPatient,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to update patient" });
  }
};

// Delete patient
const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

    if (!deletedPatient) {
      return res.status(404).json({ success: false, message: "Patient not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Patient deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete patient",
    });
  }
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
