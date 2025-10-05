const Workout = require('../models/Workout');

// Get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().populate('userId', 'name email');
    res.json(workouts);
  } catch (error) {
    console.error('Get workouts error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get workout by ID
const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id).populate('userId', 'name email');
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    console.error('Get workout error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create workout
const createWorkout = async (req, res) => {
  try {
    const { name, exercises, duration, caloriesBurned, notes } = req.body;
    
    const workout = new Workout({
      userId: req.user.userId,
      name,
      exercises,
      duration,
      caloriesBurned,
      notes
    });

    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    console.error('Create workout error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update workout
const updateWorkout = async (req, res) => {
  try {
    const { name, exercises, duration, caloriesBurned, notes } = req.body;
    
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      { name, exercises, duration, caloriesBurned, notes },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (error) {
    console.error('Update workout error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete workout
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error('Delete workout error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout
};
