const fakeAPI = require('../api/fakeAPI');

class UserRepository {
    getUserListThirdParty() {
        return fakeAPI.getUserListThirsParty()
    }
}

module.exports = new UserRepository();