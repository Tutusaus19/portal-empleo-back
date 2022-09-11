const hash = require("./hash");
const jwt = require("./jwt");
const cookie = require("./cookies");

// Creamos una función serialize, que se encargará de firmar y recibir la cookie
const serialize = (res, payload) => {
    const token = jwt.sign(payload);
    cookie.create(res, token);
};

//La función deserialize es la inversa de serialize. Se encarga de: Recibir la cookie (req.cookies), extraer el JWT de la cookie y devolverlo.
const deserialize = (req) => {
    const { access_token} = req.cookies 
    const payload = jwt.verify(access_token)

    if(!payload) return false

    return payload
};

module.exports = {
    hash,
    jwt,
    cookie,
    serialize, 
    deserialize,
};
