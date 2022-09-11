const router = require("express").Router();

const forms = {
    register: ['first_name', 'surname', 'email', 'password'],
    login: ['email', 'password']
};
module.exports = (db) => {
    router.post('/register', require('./register')(db));
    router.post('/login', require('./login')(db));

    return router;
}