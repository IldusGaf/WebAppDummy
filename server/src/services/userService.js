const UserRepository = require('../repositories/userRepostory');

class UserService {
    getUserList(req, res) {
        UserRepository.getUserListThirdParty()
        .then(apiResp => {
            res.status(200)
            .send(apiResp)
        })
        .catch(error => res.status(520).send(error))
    }
}

module.exports = new UserService()