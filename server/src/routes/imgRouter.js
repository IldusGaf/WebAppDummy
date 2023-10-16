const router = require('express').Router()
const multer = require('multer');
const ImgService = require('../services/imgService')

router.post('/upload', multer().any(), ImgService.uploadImg);

module.exports = router;