import express from "express";
const router = express.Router();

import * as doctorController from "../controllers/doctorController.js"; // ES Module import

// Create a new doctor
router.post("/doctors", doctorController.createDoctor);

// Get all doctors
router.get("/doctors", doctorController.getDoctors);

// Get a single doctor by ID
router.get("/doctors/:id", doctorController.getDoctorById);

// Update a doctor by ID
router.put("/doctors/:id", doctorController.updateDoctor);

// Delete a doctor by ID
router.delete("/doctors/:id", doctorController.deleteDoctor);

export default router; // ES Module export
