const router = require("express").Router();
const {authorizer, checker} = require("../../middlewares");

const forms = {
    register: ['first_name', 'surname', 'email', 'password'],
    login: ['email', 'password']
};
module.exports = (db) => {

    router.post('/register', checker(...forms.register), require('./register')(db));
    router.post('/login',  checker(...forms.login), require('./login')(db));
    router.post('/logout', authorizer, require('./logout')()); //No le pasamos db porque no necesitamos buscar nada en la db. Borrar el usuario es eliminar su cookie. Le pasamos authorizer para que la ejecute antes de logout demanera que nos aseguramos de que el que ace logout es porque realmente ya estaba logeado.
    
    return router;
}