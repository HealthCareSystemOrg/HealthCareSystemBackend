const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');
// Create a new record
router.post('/records', recordController.createRecord);
// Get all records
router.get('/records', recordController.getAllRecords);
// Get a specific record by ID
router.get('/records/:id', recordController.getRecordById);
// Update a record by ID
router.put('/records/:id', recordController.updateRecord);  
// Delete a record by ID
router.delete('/records/:id', recordController.deleteRecord);
module.exports = router;
// Handles POST requests to /records by invoking the createRecord method from the recordController.
// Handles GET requests to /records by invoking the getAllRecords method from the recordController.
// Handles GET requests to /records/:id by invoking the getRecordById method from the recordController. The :id is a route parameter representing the unique identifier of the record.
// Handles PUT requests to /records/:id by invoking the updateRecord method from the recordController. This allows updating details of a specific record identified by its ID.
// Handles DELETE requests to /records/:id by invoking the deleteRecord method from the recordController. This allows deleting a specific record identified by its ID.