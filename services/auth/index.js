const router = require("express").Router();

const forms = {
    register: ['first_name', 'surname', 'email', 'password'],
    login: ['email', 'password']
};
module.exports = (db) => {
    router.post('/register', require('./register')(db));
    router.post('/login', require('./login')(db));
    router.post('/logout', require('./logout')()); 
    //No le pasamos db porque no necesitamos buscar nada en la db. Borrar el usuario es eliminar su cookie. 
    return router;
}