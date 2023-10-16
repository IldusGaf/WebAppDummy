const api = require('../api/imgBBAPI');
const FormData = require("form-data");
const { API_KEY } = require('../constants/imgBBApi');
const logger = require('../logger')
const format = require('string-format')
const {imgActions: messages} = require('../constants/loggerMessages')

class ImgActions {
    uploadImgThirdParty(body) {
        const modifyFormData = new FormData();
        modifyFormData.append('key', API_KEY);
        modifyFormData.append('image', body.buffer, {
            filename: body.originalname,
            size: body.size,
          });
          console.log(modifyFormData)
        logger.info(format(messages.UPLOAD_IMG_INVOKE, JSON.stringify(modifyFormData)))
        return api.uploadImgApi(modifyFormData)
        .then(apiResp => {
            logger.info(format(messages.UPLOAD_IMG_REPLY_SUCCESS, JSON.stringify(apiResp)))
            return apiResp
          })
          .catch(errors => {
            logger.error(format(messages.UPLOAD_IMG_REPLY_ERROR, errors))
            return Promise.reject(errors)
          })
    }
}


module.exports = new ImgActions();