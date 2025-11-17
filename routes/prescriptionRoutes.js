import express from "express";
const router = express.Router();

import * as prescriptionController from "../controllers/prescriptionController.js";

// Create a new prescription
router.post("/prescriptions", prescriptionController.createPrescription);

// Get all prescriptions
router.get("/prescriptions", prescriptionController.getPrescriptions);

// Get a single prescription by ID
router.get("/prescriptions/:id", prescriptionController.getPrescriptionById);

// Update a prescription by ID
router.put("/prescriptions/:id", prescriptionController.updatePrescription);

// Delete a prescription by ID
router.delete("/prescriptions/:id", prescriptionController.deletePrescription);

export default router;
