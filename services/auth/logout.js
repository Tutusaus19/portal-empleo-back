const { cookie} = require("../../utils");


module.exports = () => async(_, res, __) => {
    // Te desloguea limpiándote la cookie
    cookie.clear(res);

    res.status(200).json({
        success: true,
    });
};
