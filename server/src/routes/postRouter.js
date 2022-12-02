const router = require('express').Router()
const PostService = require('../services/postService')
const CommentService = require('../services/commentService')

router.get('', PostService.getPostList);
router.get('/:id/comment', CommentService.getCommentList);
router.get('/:id', PostService.getPost);

module.exports = router;