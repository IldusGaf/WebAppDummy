const api = require('../api/dummyAPI');
const logger = require('../logger')
const format = require('string-format')
const {userRepository: messages} = require('../constants/loggerMessages')

class UserRepository {
    getUserListThirdParty(page, limit) {
        logger.info(messages.GET_USER_LIST_THIRD_PARTY_INVOKE)
        return api.getUserListApi(page, limit)
        .then(apiResp => {
            logger.info(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(apiResp)))
            return apiResp
        })
        .catch(error => {
            logger.error(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_ERROR, JSON.stringify(error)))
            return Promise.reject(error)
         })
    }
    getUserThirdParty(id) {
        logger.info(format(messages.GET_USER_THIRD_PARTY_INVOKE, id))
        return api.getUserApi(id)
        .then(apiResp => {
            logger.info(format(messages.GET_USER_THIRD_PARTY_REPLY_RESULT, JSON.stringify(apiResp)))
            return apiResp
        })
        .catch(error => {
            logger.error(format(messages.GET_USER_THIRD_PARTY_REPLY_ERROR, JSON.stringify(error)))
            return Promise.reject(error)
         })
    }
}

module.exports = new UserRepository();