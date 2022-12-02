const router = require('express').Router();
const userRouter = require('../routes/userRouter.js');
const postRouter = require('../routes/postRouter.js');

router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router