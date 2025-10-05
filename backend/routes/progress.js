const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllProgress, getProgressById, createProgress, updateProgress, deleteProgress } = require('../controllers/progressController');

// Get all progress entries
router.get('/', auth, getAllProgress);

// Get progress by ID
router.get('/:id', auth, getProgressById);

// Create progress entry
router.post('/', auth, createProgress);

// Update progress entry
router.put('/:id', auth, updateProgress);

// Delete progress entry
router.delete('/:id', auth, deleteProgress);

module.exports = router;