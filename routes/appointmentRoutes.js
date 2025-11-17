import express from "express";
const router = express.Router();

import * as appointmentController from "../controllers/appointmentController.js"; // ES Module import

// Create a new appointment
router.post("/appointments", appointmentController.createAppointment);

// Get all appointments
router.get("/appointments", appointmentController.getAppointments);

// Get a single appointment by ID
router.get("/appointments/:id", appointmentController.getAppointmentById);

// Update an appointment by ID
router.put("/appointments/:id", appointmentController.updateAppointment);

// Delete an appointment by ID
router.delete("/appointments/:id", appointmentController.deleteAppointment);

export default router; // ES Module export
