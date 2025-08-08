import express from "express";
import { createWorkout } from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Workout route works!");
});

router.post("/", createWorkout);

export default router;
