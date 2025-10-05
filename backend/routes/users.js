const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

// Get all users (admin only)
router.get('/', adminAuth, getAllUsers);

// Get user by ID
router.get('/:id', auth, getUserById);

// Update user
router.put('/:id', auth, updateUser);

// Delete user (admin only)
router.delete('/:id', adminAuth, deleteUser);

module.exports = router;