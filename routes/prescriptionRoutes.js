const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
// Create a new patient
router.post('/patients', patientController.createPatient);  
// Get all patients
router.get('/patients', patientController.getAllPatients);
// Get a specific patient by ID
router.get('/patients/:id', patientController.getPatientById);
// Update a patient by ID
router.put('/patients/:id', patientController.updatePatient);
// Delete a patient by ID
router.delete('/patients/:id', patientController.deletePatient);
module.exports = router; //exports the router to be used in other parts of the application.
// Handles POST requests to /patients by invoking the createPatient method from the patientController.
// Handles GET requests to /patients by invoking the getAllPatients method from the patientController.
// Handles GET requests to /patients/:id by invoking the getPatientById method from the patientController. The :id is a route parameter representing the unique identifier of the patient.
// Handles PUT requests to /patients/:id by invoking the updatePatient method from the patientController. This allows updating details of a specific patient identified by its ID.
// Handles DELETE requests to /patients/:id by invoking the deletePatient method from the patientController. This allows deleting a specific patient identified by its ID.
