import Doctor from "../models/Doctor.js";

// Create new doctor
export const createDoctor = async (req, res) => {
  try {
    const { name, email, password, specialization, phone, yearsOfExperience, clinicAddress, availableTimings } = req.body;

    const doctor = await Doctor.create({
      name,
      email,
      password,
      specialization,
      phone,
      yearsOfExperience,
      clinicAddress,
      availableTimings,
    });

    return res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      doctor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to create doctor" });
  }
};

// Get all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.status(200).json({ success: true, doctors });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to fetch doctors" });
  }
};

// Get single doctor
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    return res.status(200).json({ success: true, doctor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to fetch doctor" });
  }
};

// Update doctor
export const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedDoctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to update doctor" });
  }
};

// Delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!deletedDoctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to delete doctor" });
  }
};
