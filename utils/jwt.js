const jwt = require('jsonwebtoken');

//Para crear el JWT:
const sign = (payload) => {
    return jwt.sign(payload, process.env.SECRET);
};

// Para verificar si tenemos el token
const verify = (token) =>{
    try {
        return jwt.verify(token, process.env.SECRET);  
    } catch (error) {
        console.error("> [verify]: ", error.message);

    return false;
    }
};

module.exports = {
    sign,
    verify, 
}