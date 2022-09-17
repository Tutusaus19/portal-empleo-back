const environment = require(`./${process.env.NODE_ENV || "local"}`);

module.exports = environment;
