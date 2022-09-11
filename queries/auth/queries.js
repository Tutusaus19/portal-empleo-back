const { sql } = require("slonik");

// Una petición a la db para seleccionar el usuario
const selectFullUser = ({email}) => {
    return sql `
        SELECT * FROM users 
        WHERE email = ${email};
    `;
};

// Para insertar un usuario nuevo en la db
const insertUser = ({ first_name, surname, email, password }) => {
    return sql`
      INSERT INTO users (
        first_name, surname, email, password
      ) VALUES (
         ${first_name}, ${surname},${email}, ${password}
      );
    `;
  };
  
  module.exports = {
    selectFullUser,
    insertUser,
  };
