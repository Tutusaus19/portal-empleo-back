//Instalamos y requerimos el paquete bcrypt: A library to help you hash passwords.
const bcrypt = require("bcrypt");

// ¿Cómo salpimentamos la contraseña?
 const encrypt = async (password) => {
    const rounds = 10; 
    const salt = await bcrypt.genSalt(rounds);
    return await bcrypt.hash(passwords, salt);
 };

 const compare = (plain) => async (hash) => {
    return await bcrypt.compare(plain, hash);
 };

 module.exports = {
    encrypt,
    compare,
 }