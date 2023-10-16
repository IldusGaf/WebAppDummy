const imgActions = require('../actions/imgActions');
const logger = require('../logger');
const format = require('string-format');
const { imgService: messages } = require('../constants/loggerMessages');

class ImgService {
    uploadImg(req, res) {
        logger.info(format(messages.UPLOAD_IMG_INPUT_PARAMS, JSON.stringify(req.files[0])))
        imgActions.uploadImgThirdParty(req.files[0])
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.UPLOAD_IMG_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.UPLOAD_IMG_ERROR, 520, error))
            res.status(520).send(error)})
    }
}

module.exports = new ImgService()