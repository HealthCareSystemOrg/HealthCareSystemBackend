const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');
// Create a new doctor
router.post('/doctors', departmentController.createDoctor);
// Get all doctors
router.get('/doctors', departmentController.getAllDoctors);
// Get a specific doctor by ID
router.get('/doctors/:id', departmentController.getDoctorById);
// Update a doctor by ID
router.put('/doctors/:id', departmentController.updateDoctor);
// Delete a doctor by ID
router.delete('/doctors/:id', departmentController.deleteDoctor);
module.exports = router;
// Handles POST requests to /doctors by invoking the createDoctor method from the departmentController. 
// Handles GET requests to /doctors by invoking the getAllDoctors method from the departmentController.
// Handles GET requests to /doctors/:id by invoking the getDoctorById method from the departmentController. The :id is a route parameter representing the unique identifier of the doctor.
// Handles PUT requests to /doctors/:id by invoking the updateDoctor method from the departmentController. This allows updating details of a specific doctor identified by its ID.
// Handles DELETE requests to /doctors/:id by invoking the deleteDoctor method from the departmentController. This allows deleting a specific doctor identified by its ID.
