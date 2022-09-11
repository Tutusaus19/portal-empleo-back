module.exports = {
    generic: {
      empty: {
        statusCode: 400,
        error: new Error("all fields are mandatory 👀"),
      },
    },
    login: {
      unknown: {
        statusCode: 400,
        error: new Error("UPS!! ⚠ user or password incorrect"),
      },
    },
    register: {
      duplication: {
        statusCode: 400,
        error: new Error("user already exists 😏"),
      },
    },
  };