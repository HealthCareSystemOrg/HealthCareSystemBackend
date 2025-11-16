const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');

// Create a new record
router.post('/records', recordController.createRecord);

// Get all records
router.get('/records', recordController.getRecords);

// Get a specific record by ID
router.get('/records/:id', recordController.getRecordById);

// Update a record by ID
router.put('/records/:id', recordController.updateRecord);  

// Delete a record by ID
router.delete('/records/:id', recordController.deleteRecord);

module.exports = router;
