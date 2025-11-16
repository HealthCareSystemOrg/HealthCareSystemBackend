const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

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

module.exports = router;
