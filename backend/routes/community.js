const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
  getAllChallenges, 
  createChallenge, 
  joinChallenge, 
  getAllForumThreads, 
  createForumThread, 
  addReply 
} = require('../controllers/communityController');

// Challenge routes
router.get('/challenges', auth, getAllChallenges);
router.post('/challenges', auth, createChallenge);
router.post('/challenges/:id/join', auth, joinChallenge);

// Forum routes
router.get('/forum', auth, getAllForumThreads);
router.post('/forum', auth, createForumThread);
router.post('/forum/:id/reply', auth, addReply);

module.exports = router;