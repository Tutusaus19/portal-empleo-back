const { getCorrectUser } = require("../../queries/auth");
const {login} = require("../../errors/auth");
const errors = require("../../errors/commons");
const { hash } = require("../../utils");

module.exports = (db) => async (req, res, next) => {
    const {email, password} = req.body;

    const queryResult = await getCorrectUser(db)({
        email, 
        compareFn: hash.compare(password),
    });

    if (!queryResult.ok) return next(login[queryResult.code] || errors[500]);
    
    res.status(200).json({
        success: true,
      });

}