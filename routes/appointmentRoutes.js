const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

// Create a new appointment
router.post("/appointments", appointmentController.createAppointment);

// Get all appointments
router.get("/appointments", appointmentController.getAppointments);

// Get a specific appointment by ID
router.get("/appointments/:id", appointmentController.getAppointmentById);

// Update an appointment by ID
router.put("/appointments/:id", appointmentController.updateAppointment);

// Delete an appointment by ID
router.delete("/appointments/:id", appointmentController.deleteAppointment);

module.exports = router;
