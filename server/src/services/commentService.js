const CommentRepository = require('../repositories/commentRepository');
const logger = require('../logger');
const format = require('string-format');
const { commentService: messages } = require('../constants/loggerMessages');

class CommentService {
    getCommentList(req, res) {
        logger.info(format(messages.GET_COMMENT_LIST_INPUT_PARAMS, req.params.id, req.query.page, req.query.limit))
        CommentRepository.getCommentListThirdParty(req.params.id, req.query.page, req.query.limit)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.GET_COMMENT_LIST_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.GET_COMMENT_LIST_ERROR, 520, error))
            res.status(520).send(error)
        })
    }
}

module.exports = new CommentService()