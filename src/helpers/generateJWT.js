const jwt = require('jsonwebtoken');

const generateJWT = ( _id , email ) => {

    return new Promise( ( resolve , reject )  => {

        const payload = { _id , email };

        jwt.sign( payload , process.env.SECRET_JWT_SEED , {
            expiresIn : '1h'
        }, ( error , token ) => {
            if( error ){
                console.log(error);
                reject('Hubo un error al generar el token.');
            }

            resolve(token);
        })
    });
}

module.exports = {
    generateJWT
}