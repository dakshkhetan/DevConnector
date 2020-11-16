const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const { validText } = require('../../middleware/valid');

const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  likePost,
  unlikePost,
  addComment,
  deleteComment
} = require('../../controllers/posts.controller');

router.post('/', auth, validText, createPost);
router.get('/', auth, getAllPosts);
router.get('/:id', auth, checkObjectId('id'), getPostById);
router.delete('/:id', auth, checkObjectId('id'), deletePost);
router.put('/like/:id', auth, checkObjectId('id'), likePost);
router.put('/unlike/:id', auth, checkObjectId('id'), unlikePost);
router.post('/comment/:id', auth, checkObjectId('id'), validText, addComment);
router.delete('/comment/:id/:comment_id', auth, deleteComment);

module.exports = router;
