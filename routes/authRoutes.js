const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware"); // Optional: for protecting routes like profile

// Register
router.post("/register", authController.registerUser);

// Login
router.post("/login", authController.loginUser);

// Logout
router.post("/logout", authController.logoutUser);

// Get profile (protected route)
router.get("/profile", authMiddleware, authController.getProfile);

module.exports = router;
