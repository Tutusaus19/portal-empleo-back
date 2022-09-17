const { deserialize } = require('../utils');
const errors = require('../errors/commons');

//Esta guarda va a ser la autorizadora para que decirle al cliente si puede o no puede pasar por la ruta 
module.exports = (req, res, next) => {
    // Recibimos las cookies y extraemos el JWT y lo devolvemos (función deserialize) En Req están nuestras cookies.
    const payload = deserialize(req);
    
    //Si no existe la cookie o es diferente tiene que saltar un error de unathorized
    if(!payload) return next(errors[401]);

    // En reslocals es el mejor sitio para guardar toda la info que se guarda en el tiempo que pasa desde que el usuario hace una petición hasta que se le responde
    res.locals = { ...payload}

    // Metemos next para que pueda pasar a la siguiente función
    next();
}