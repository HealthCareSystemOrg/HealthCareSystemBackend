const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');    
// Create a new department
router.post('/departments', departmentController.createDepartment); 
// Get all departments
router.get('/departments', departmentController.getAllDepartments);
// Get a specific department by ID
router.get('/departments/:id', departmentController.getDepartmentById);
// Update a department by ID
router.put('/departments/:id', departmentController.updateDepartment); 
// Delete a department by ID
router.delete('/departments/:id', departmentController.deleteDepartment); 
module.exports = router;
// Handles POST requests to /departments by invoking the createDepartment method from the departmentController.// Handles GET requests to /departments by invoking the getAllDepartments method from the departmentController.
// Handles GET requests to /departments/:id by invoking the getDepartmentById method from the departmentController. The :id is a route parameter representing the unique identifier of the department.
// Handles PUT requests to /departments/:id by invoking the updateDepartment method from the departmentController. This allows updating details of a specific department identified by its ID.
// Handles DELETE requests to /departments/:id by invoking the deleteDepartment method from the departmentController. This allows deleting a specific department identified by its ID.