import Prescription from "../models/Prescription.js";

// Create a new prescription
export const createPrescription = async (req, res) => {
  try {
    const { patientId, doctorId, medications, diagnosis, notes } = req.body;

    const prescription = await Prescription.create({
      patientId,
      doctorId,
      medications,
      diagnosis,
      notes,
      // issuedDate will automatically use current date
    });

    return res.status(201).json({
      success: true,
      message: "Prescription created successfully",
      prescription,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create prescription",
      error: error.message,
    });
  }
};

// Get all prescriptions
export const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
      .populate("patientId", "name email")
      .populate("doctorId", "name email specialty");

    return res.status(200).json({ success: true, prescriptions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch prescriptions",
    });
  }
};

// Get a single prescription by ID
export const getPrescriptionById = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id)
      .populate("patientId", "name email")
      .populate("doctorId", "name email specialty");

    if (!prescription) {
      return res.status(404).json({ success: false, message: "Prescription not found" });
    }

    return res.status(200).json({ success: true, prescription });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch prescription",
    });
  }
};

// Update a prescription
export const updatePrescription = async (req, res) => {
  try {
    const updatedPrescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPrescription) {
      return res.status(404).json({ success: false, message: "Prescription not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Prescription updated successfully",
      prescription: updatedPrescription,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update prescription",
    });
  }
};

// Delete a prescription
export const deletePrescription = async (req, res) => {
  try {
    const deletedPrescription = await Prescription.findByIdAndDelete(req.params.id);

    if (!deletedPrescription) {
      return res.status(404).json({ success: false, message: "Prescription not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Prescription deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete prescription",
    });
  }
};
