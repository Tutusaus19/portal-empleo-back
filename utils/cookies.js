// Crear la cookie
const create = (res, token, extTime = 300000) => {
        res.cookie('access_token', token, {
            expires: new Date(Date.now() + extTime),
            secure: false, //Para conexiones seguras solo. Localhost no es una conexi´´on segura. Si se pasa a producción, estoy hay que pasarlo a true. Es para conexiones https.
            httpOnly: true, 
        });
};
// Borrar la cookie
const clear = (res) => {
    res.clearCookie("access_token");
};
module.exports = {
    create,
    clear,
};
