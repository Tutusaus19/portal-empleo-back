const { deserialize, cookie} = require("../../utils");
const errors = require("../../errors/commons");

module.exports = () => async(req, res, next) => {
    /// Recibimos las cookies y extraemos el JWT y lo devolvemos (función deserialize)
    const payload = deserialize(req)

    //Si no existe la cookie o es diferente tiene que saltar un error de unathorized
    if(!payload) return next(errors[401]);

    // Te desloguea limpiándote la cookie
    cookie.clear(res);

    res.status(200).json({
        success: true,
    });
};
