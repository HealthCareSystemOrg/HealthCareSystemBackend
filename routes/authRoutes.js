import express from "express";
const router = express.Router();

import * as authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // Optional: for protecting routes like profile

// Register
router.post("/register", authController.registerUser);

// Login
router.post("/login", authController.loginUser);

// Logout
router.post("/logout", authController.logoutUser);

// Get profile (protected route)
router.get("/profile", authMiddleware, authController.getProfile);

export default router;
