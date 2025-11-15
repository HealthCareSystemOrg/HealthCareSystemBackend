const { Record } = require("../models/Record");

// Create a new medical record
const createRecord = async (req, res) => {
  try {
    const { patientId, doctorId, diagnosis, treatment, notes } = req.body;

    const record = await Record.create({
      patientId,
      doctorId,
      diagnosis,
      treatment,
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
const getRecords = async (req, res) => {
  try {
    const records = await Record.find()
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
const getRecordById = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id)
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
const updateRecord = async (req, res) => {
  try {
    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });

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
const deleteRecord = async (req, res) => {
  try {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);

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

module.exports = {
  createRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
};
