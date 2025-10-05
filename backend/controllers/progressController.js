const Progress = require('../models/Progress');

// Get all progress entries
const getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.find().populate('userId', 'name email');
    res.json(progress);
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get progress by ID
const getProgressById = async (req, res) => {
  try {
    const progress = await Progress.findById(req.params.id).populate('userId', 'name email');
    if (!progress) {
      return res.status(404).json({ message: 'Progress entry not found' });
    }
    res.json(progress);
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create progress entry
const createProgress = async (req, res) => {
  try {
    const { weight, bodyFat, muscleMass, measurements, notes } = req.body;
    
    const progress = new Progress({
      userId: req.user.userId,
      weight,
      bodyFat,
      muscleMass,
      measurements,
      notes
    });

    await progress.save();
    res.status(201).json(progress);
  } catch (error) {
    console.error('Create progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update progress entry
const updateProgress = async (req, res) => {
  try {
    const { weight, bodyFat, muscleMass, measurements, notes } = req.body;
    
    const progress = await Progress.findByIdAndUpdate(
      req.params.id,
      { weight, bodyFat, muscleMass, measurements, notes },
      { new: true }
    );

    if (!progress) {
      return res.status(404).json({ message: 'Progress entry not found' });
    }

    res.json(progress);
  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete progress entry
const deleteProgress = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndDelete(req.params.id);
    if (!progress) {
      return res.status(404).json({ message: 'Progress entry not found' });
    }
    res.json({ message: 'Progress entry deleted successfully' });
  } catch (error) {
    console.error('Delete progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllProgress,
  getProgressById,
  createProgress,
  updateProgress,
  deleteProgress
};
