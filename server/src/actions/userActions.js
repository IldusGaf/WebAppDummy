const api = require('../api/dummyAPI');
const logger = require('../logger')
const format = require('string-format')
const {userActions: messages} = require('../constants/loggerMessages')

class UserActions {
    updateUserThirdParty(id, body) {
        logger.info(format(messages.UPDATE_USER_INVOKE, id, JSON.stringify(body)))
        return api.updateUserApi(id, body)
        .then(apiResp => {
            logger.info(format(messages.UPDATE_USER_REPLY_SUCCESS, JSON.stringify(apiResp)))
            return apiResp
          })
          .catch(errors => {
            logger.error(format(messages.UPDATE_USER_REPLY_ERROR, errors))
            return Promise.reject(errors)
          })
    }
    createUserThirdParty(body) {
        logger.info(format(messages.CREATE_USER_INVOKE, JSON.stringify(body)))
        return api.createUserApi(body)
        .then(apiResp => {
            logger.info(format(messages.CREATE_USER_REPLY_SUCCESS, JSON.stringify(apiResp)))
            return apiResp
          })
          .catch(errors => {
            logger.error(format(messages.CREATE_USER_REPLY_ERROR, errors))
            return Promise.reject(errors)
          })
    }
}


module.exports = new UserActions();