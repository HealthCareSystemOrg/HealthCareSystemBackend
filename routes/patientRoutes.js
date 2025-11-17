import express from "express";
const router = express.Router();

import * as patientController from "../controllers/patientController.js"; // ES Module import

// Create a new patient
router.post("/patients", patientController.createPatient);

// Get all patients
router.get("/patients", patientController.getPatients);

// Get a specific patient by ID
router.get("/patients/:id", patientController.getPatientById);

// Update a patient by ID
router.put("/patients/:id", patientController.updatePatient);

// Delete a patient by ID
router.delete("/patients/:id", patientController.deletePatient);

export default router; // ES Module export
