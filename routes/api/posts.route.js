const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
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
router.get('/:id', auth, getPostById);
router.delete('/:id', auth, deletePost);
router.put('/like/:id', auth, likePost);
router.put('/unlike/:id', auth, unlikePost);
router.post('/comment/:id', auth, validText, addComment);
router.delete('/comment/:id/:comment_id', auth, deleteComment);

module.exports = router;
