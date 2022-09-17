const { getCorrectUser } = require("../../queries/auth");
const { login } = require("../../errors/auth");
const { hash, serialize } = require("../../utils");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
    const {email, password} = req.body;

    // El middlware de checker nos hace esta función: if (!email || !password) return next(generic["empty"]);

    const queryResult = await getCorrectUser(db)({
        email, 
        compareFn: hash.compare(password),
    });

    if (!queryResult.ok) return next(login[queryResult.code] || errors[500]);

    serialize(res, queryResult.data.email);
    
    res.status(200).json({
        success: true,
      });
}