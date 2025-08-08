console.log("Starting server...");

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import workoutRoutes from "./routes/workoutRoutes.js";

dotenv.config(); // Load .env variables

connectDB(); // Connect to MongoDB

const app = express();

app.use(express.json()); // Parse JSON request bodies

// Use workout routes for /api/workouts
app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
