const slonik = require("slonik");
const { DB_URL } = require("../environments");

module.exports = slonik.createPool(DB_URL);
