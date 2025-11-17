import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
import authRoutes from "./routes/authRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import recordRoutes from "./routes/recordRoutes.js";

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api", patientRoutes);
app.use("/api", doctorRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", departmentRoutes);
app.use("/api", prescriptionRoutes);
app.use("/api", recordRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

