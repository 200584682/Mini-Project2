import Workout from "../models/workoutModel.js";

// @desc    Create a new workout
// @route   POST /api/workouts
// @access  Public
export const createWorkout = async (req, res) => {
    try {
        const { exerciseName, category, duration, caloriesBurned, date } = req.body;

        // Create a new workout document
        const newWorkout = new Workout({
            exerciseName,
            category,
            duration,
            caloriesBurned,
            date
        });

        // Save to database
        const savedWorkout = await newWorkout.save();

        res.status(201).json(savedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
