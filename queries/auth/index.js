const { selectFullUser, insertUser } = require("./queries");
const { queryCatcher } = require("../utils");

// Recogemos el usuario - peticion 2
const getFullUser =
  (db) =>
  async ({ email }) => {
    return await queryCatcher(
      db.maybeOne,
      "getFullUser"
    )(selectFullUser({ email }));
  };

// Creamos usuario - peticion 1
  const createUser =
  (db) =>
  async ({ first_name, surname, email, password }) => {
    const user = await getFullUser(db)({ email });
// // Si existe el usuario :
    if (user.data)
      return {
        ok: false,
        code: "duplication",
      };

    return await queryCatcher(
      db.query,
      "createUser"
    )(insertUser({ first_name, surname, email, password }));
  };

// ¿El usuario o la contraseña coinciden con la que tenemos en la db?

  const getCorrectUser = (db) => async ({ email, compareFn }) => {

// // ¿Existe el usuario?
    const user = await getFullUser(db)({ email });

    if (!user.data) {
      return {
        ok: false,
        code: "unknown",
      };
    }
// // ¿Existe la password?
    const isPasswordCorrect = await compareFn(user.data.password);

    if (!isPasswordCorrect) {
      return {
        ok: false,
        code: "unknown",
      };
    }

    return {
      ok: true,
      data: { email: user.data.email },
    };
  };
module.exports = {
    getFullUser,
    createUser,
    getCorrectUser,
};