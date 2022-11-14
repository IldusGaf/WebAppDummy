const router = require('express').Router();
const userRouter = require('../routes/userRouter.js');

router.use('/users', userRouter);

module.exports = router