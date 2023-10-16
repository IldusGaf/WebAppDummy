const PostRepository = require('../repositories/postRepository');
const logger = require('../logger');
const format = require('string-format');
const { postService: messages } = require('../constants/loggerMessages');

class PostService {
    getPostList(req, res) {
        logger.info(format(messages.GET_POST_LIST_INPUT_PARAMS, req.query.page, req.query.limit))
        PostRepository.getPostListThirdParty(req.query.page, req.query.limit)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.GET_POST_LIST_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.GET_POST_LIST_ERROR,520, error))
            res.status(520).send(error)
        })
    }
    getPost(req, res) {
        logger.info(format(messages.GET_POST_INPUT_PARAMS, req.params.id))
        PostRepository.getPostThirdParty(req.params.id)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.GET_POST_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.GET_USER_ERROR,520, error))
            res.status(520).send(error)
        })
    }
    getPostByUser(req, res) {
        logger.info(format(messages.GET_POST_BY_USER_INPUT_PARAMS, req.params.id))
        PostRepository.getPostByUserThirdParty(req.params.id)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.GET_POST_BY_USER_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.GET_POST_BY_USER_ERROR,520, error))
            res.status(520).send(error)
        })
    }
}

module.exports = new PostService()