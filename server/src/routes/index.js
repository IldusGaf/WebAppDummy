const router = require('express').Router();
const userRouter = require('../routes/userRouter.js');
const postRouter = require('../routes/postRouter.js');
const imgRouter = require('../routes/imgRouter.js');

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/img', imgRouter)

module.exports = router