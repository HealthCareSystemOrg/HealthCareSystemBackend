import MedicalRecord from "../models/MedicalRecord.js"; // ES Module import


// Create a new medical record
export const createRecord = async (req, res) => {
  try {
    const { patientId, doctorId, diagnosis, treatment, prescriptions, visitDate, notes } = req.body;

    // Make sure required fields are passed
    if (!visitDate || !prescriptions) {
      return res.status(400).json({
        success: false,
        message: "visitDate and prescriptions are required",
      });
    }

    const record = await MedicalRecord.create({
      patientId,
      doctorId,
      diagnosis,
      treatment,
      prescriptions, // required
      visitDate,     // required
      notes,
    });

    return res.status(201).json({
      success: true,
      message: "Medical record created successfully",
      record,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create medical record",
    });
  }
};
// Get all medical records
export const getRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find()
      .populate("patientId", "name email")
      .populate("doctorId", "name email specialty");

    return res.status(200).json({ success: true, records });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch medical records",
    });
  }
};

// Get a single medical record by ID
export const getRecordById = async (req, res) => {
  try {
    const record = await MedicalRecord.findById(req.params.id)
      .populate("patientId", "name email")
      .populate("doctorId", "name email specialty");

    if (!record) {
      return res.status(404).json({ success: false, message: "Medical record not found" });
    }

    return res.status(200).json({ success: true, record });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch medical record",
    });
  }
};

// Update a medical record
export const updateRecord = async (req, res) => {
  try {
    const updatedRecord = await MedicalRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedRecord) {
      return res.status(404).json({ success: false, message: "Medical record not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Medical record updated successfully",
      record: updatedRecord,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update medical record",
    });
  }
};

// Delete a medical record
export const deleteRecord = async (req, res) => {
  try {
    const deletedRecord = await MedicalRecord.findByIdAndDelete(req.params.id);

    if (!deletedRecord) {
      return res.status(404).json({ success: false, message: "Medical record not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Medical record deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete medical record",
    });
  }
};
