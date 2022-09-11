// Funcion QueryCatcher que nos servirá de atajo para no tener que crear todo el rato try catchs en las queries
// El Fn es la función, y el origin un string que nos sirve para saber de que función nos llega el error

const queryCatcher =
  (fn, origin) =>
  async (...args) => {
    try {
      const result = await fn(...args);

      return {
        ok: true,
        data: result && result.rows ? result.rows : result,
      };
    } catch (error) {
      console.error(`> [${origin}]: `, error.message);

      return {
        ok: false,
      };
    }
  };

module.exports = {
  queryCatcher,
};