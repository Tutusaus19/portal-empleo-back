const { createUser } = require('../../queries/auth');
const { hash } = require("../../utils");
const { register } = require('../../errors/auth');
const errors = require('../../errors/commons');


module.exports = db => async(req, res, next) => {

    //Para poder coger el nombre, email y contraseña del body: 
    const { first_name, surname, email, password } = req.body ;

     // El middlware de checker nos hace esta función: if (!email || !password || !first_name || !surname) return next(generic["empty"]);

    const queryResult = await createUser(db)({
        first_name,
        surname,
        email,
        password: await hash.encrypt(password),
    });

    //Si algo falla llegados a este punto ya no será culpa  nuestra sino del servidor 
    if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

    //const subject = '¡Bienvenido a la comunidad de ConnectingTalent';
    //const message = 'Enhorabuena ya formas parte de la comunidad más grande programadores del mundo. Ahora solo queda que tengas un buen feelling con el cliente final, quieres que te ayudemos? Lo primero que re recomendamos es completar tu perfil'
    /*    
    try {
        await sendEmail({
            email,
            subject,
            message,
        });
    } catch (error){
        console.log('> error:', error.message);
    };
    */

    res.status(200).json({
        success:true,
    });
};