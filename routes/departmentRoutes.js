const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');    

// Create a new department
router.post('/departments', departmentController.createDepartment); 

// Get all departments
router.get('/departments', departmentController.getDepartments);

// Get a specific department by ID
router.get('/departments/:id', departmentController.getDepartmentById);

// Update a department by ID
router.put('/departments/:id', departmentController.updateDepartment); 

// Delete a department by ID
router.delete('/departments/:id', departmentController.deleteDepartment); 

module.exports = router;
