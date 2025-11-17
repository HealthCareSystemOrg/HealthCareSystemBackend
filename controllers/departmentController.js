import Department from "../models/Department.js";

// Create a new department
export const createDepartment = async (req, res) => {
  try {
    const {
      name,
      head,
      location,
      contactNumber,
      servicesOffered,
      operatingHours,
    } = req.body;

    // Validate required fields
    if (!name || !head || !location || !contactNumber || !servicesOffered || !operatingHours) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, head, location, contactNumber, servicesOffered, operatingHours) are required",
      });
    }

    if (!Array.isArray(servicesOffered)) {
      return res.status(400).json({
        success: false,
        message: "servicesOffered must be an array of strings",
      });
    }

    const department = await Department.create({
      name,
      head,
      location,
      contactNumber,
      servicesOffered,
      operatingHours,
    });

    return res.status(201).json({
      success: true,
      message: "Department created successfully",
      department,
    });
  } catch (error) {
    console.error(error);
    // Check for duplicate key errors (unique fields)
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: `${duplicateField} must be unique. '${error.keyValue[duplicateField]}' already exists.`,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Failed to create department",
    });
  }
};

// Get all departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json({ success: true, departments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch departments",
    });
  }
};

// Get a single department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    return res.status(200).json({ success: true, department });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch department",
    });
  }
};

// Update a department
export const updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // runValidators ensures schema rules are enforced
    );

    if (!updatedDepartment) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Department updated successfully",
      department: updatedDepartment,
    });
  } catch (error) {
    console.error(error);
    // Handle duplicate key error on update
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: `${duplicateField} must be unique. '${error.keyValue[duplicateField]}' already exists.`,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Failed to update department",
    });
  }
};

// Delete a department
export const deleteDepartment = async (req, res) => {
  try {
    const deletedDepartment = await Department.findByIdAndDelete(req.params.id);

    if (!deletedDepartment) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Department deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete department",
    });
  }
};
