const api = require('../api/dummyAPI');
const logger = require('../logger')
const format = require('string-format')
const {commentRepository: messages} = require('../constants/loggerMessages')

class CommentRepository {
    getCommentListThirdParty(id, page, limit) {
        logger.info(messages.GET_COMMENT_LIST_THIRD_PARTY_INVOKE)
        return api.getCommentListApi(id, page, limit)
        .then(apiResp => {
            logger.info(format(messages.GET_COMMENT_LIST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(apiResp)))
            return apiResp
        })
        .catch(error => {
            logger.error(format(messages.GET_COMMENT_LIST_THIRD_PARTY_REPLY_ERROR, JSON.stringify(error)))
            return Promise.reject(error)
         })
    }
}

module.exports = new CommentRepository();