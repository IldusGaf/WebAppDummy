const api = require('../api/dummyAPI');
const logger = require('../logger')
const format = require('string-format')
const {postRepository: messages} = require('../constants/loggerMessages')

class PostRepository {
    getPostListThirdParty(page, limit) {
        logger.info(messages.GET_POST_LIST_THIRD_PARTY_INVOKE)
        return api.getPostListApi(page, limit)
        .then(apiResp => {
            logger.info(format(messages.GET_POST_LIST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(apiResp)))
            return apiResp
        })
        .catch(error => {
            logger.error(format(messages.GET_POST_LIST_THIRD_PARTY_REPLY_ERROR, JSON.stringify(error)))
            return Promise.reject(error)
         })
    }
    getPostThirdParty(id) {
        logger.info(format(messages.GET_POST_THIRD_PARTY_INVOKE, id))
        return api.getPostApi(id)
        .then(apiResp => {
            logger.info(format(messages.GET_POST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(apiResp)))
            return apiResp
        })
        .catch(error => {
            logger.error(format(messages.GET_POST_THIRD_PARTY_REPLY_ERROR, JSON.stringify(error)))
            return Promise.reject(error)
         })
    }
    getPostByUserThirdParty(id) {
        logger.info(format(messages.GET_POST_BY_USER_THIRD_PARTY_INVOKE, id))
        return api.getPostByUserApi(id)
        .then(apiResp => {
            logger.info(format(messages.GET_POST_BY_USER_THIRD_PARTY_REPLY_RESULT, JSON.stringify(apiResp)))
            return apiResp
        })
        .catch(error => {
            logger.error(format(messages.GET_POST_BY_USER_THIRD_PARTY_REPLY_ERROR, JSON.stringify(error)))
            return Promise.reject(error)
         })
    }
}

module.exports = new PostRepository();