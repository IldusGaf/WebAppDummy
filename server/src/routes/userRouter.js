const router = require('express').Router()
const UserService = require('../services/userService')
const PostService = require('../services/postService')

router.get('', UserService.getUserList);
router.get('/:id/post', PostService.getPostByUser);
router.get('/:id', UserService.getUser);
router.put('/:id', UserService.updateUser);
router.post('/create', UserService.createUser);

module.exports = router;