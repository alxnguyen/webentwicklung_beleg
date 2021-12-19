const userDAO = require("../dao/user");

class UserService {
    createUser(userDto) {
        const {email, password} = userDto;
        return userDAO.createUser(email, password);
    }
}

module.exports = new UserService();