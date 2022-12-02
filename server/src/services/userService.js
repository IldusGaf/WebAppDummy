const userActions = require('../actions/userActions');
const UserRepository = require('../repositories/userRepository');
const logger = require('../logger');
const format = require('string-format');
const { userService: messages } = require('../constants/loggerMessages');

class UserService {
    getUserList(req, res) {
        logger.info(format(messages.GET_USER_LIST_INPUT_PARAMS, req.query.page, req.query.limit))
        UserRepository.getUserListThirdParty(req.query.page, req.query.limit)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.GET_USER_LIST_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.GET_USER_LIST_ERROR,520, error))
            res.status(520).send(error)
        })
    }
    getUser(req, res) {
        logger.info(format(messages.GET_USER_INPUT_PARAMS, req.params.id))
        UserRepository.getUserThirdParty(req.params.id)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.GET_USER_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.GET_USER_ERROR,520, error))
            res.status(520).send(error)
        })
    }
    updateUser(req, res) {
        logger.info(format(messages.UPDATE_USER_INPUT_PARAMS, req.params.id, JSON.stringify(req.body)))
        userActions.updateUserThirdParty(req.params.id,req.body)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.UPDATE_USER_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.UPDATE_USER_ERROR, 520, error))
            res.status(520).send(error)})
    }
    createUser(req, res) {
        logger.info(format(messages.CREATE_USER_INPUT_PARAMS, JSON.stringify(req.body)))
        userActions.createUserThirdParty(req.body)
        .then(apiResp => {
            const result = JSON.stringify(apiResp);
            logger.info(format(messages.CREATE_USER_SUCCESS, 200, result))
            res.status(200)
            .send(result)
        })
        .catch(error => {
            logger.error(format(messages.CREATE_USER_ERROR,520, error))
            res.status(520).send(error)})
    }
}

module.exports = new UserService()