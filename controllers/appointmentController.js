const { Appointment } = require("../models/Appointment");

// Create a new appointment
const createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, appointmentDate, reason, status } = req.body;

    const appointment = await Appointment.create({
      patientId,
      doctorId,
      appointmentDate,
      reason,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create appointment",
    });
  }
};

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patientId", "name email") // get patient details
      .populate("doctorId", "name email specialty"); // get doctor details

    return res.status(200).json({ success: true, appointments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to fetch appointments" });
  }
};

// Get a single appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate("patientId", "name email")
      .populate("doctorId", "name email specialty");

    if (!appointment) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    return res.status(200).json({ success: true, appointment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to fetch appointment" });
  }
};

// Update an appointment
const updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to update appointment" });
  }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!deletedAppointment) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to delete appointment" });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
