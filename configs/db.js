const slonik = require("slonik");
const { DB_URL } = require("../environments");

module.exports = slonik.createPool(process.env.DB_URL);
