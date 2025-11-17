import express from "express";
const router = express.Router();

import * as recordController from "../controllers/recordController.js"; // ES Module import

// Create a new record
router.post("/records", recordController.createRecord);

// Get all records
router.get("/records", recordController.getRecords);

// Get a specific record by ID
router.get("/records/:id", recordController.getRecordById);

// Update a record by ID
router.put("/records/:id", recordController.updateRecord);

// Delete a record by ID
router.delete("/records/:id", recordController.deleteRecord);

export default router; // ES Module export
