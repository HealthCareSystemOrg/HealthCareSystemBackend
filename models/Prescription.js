import mongoose from "mongoose";

const prescriptionSchema = mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    medications: {
      type: [String],
      required: true,
    },
    issuedDate: {
      type: Date,
      required: true,
      default: Date.now, // <-- Automatically set to current date if not provided
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

const Prescription = mongoose.model("Prescription", prescriptionSchema);
export default Prescription;
