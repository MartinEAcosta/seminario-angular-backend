const jwt = require('jsonwebtoken');
const { request, response } = require('express');

const validateJWT = ( req = request , res = response , next ) => {

    // Obtener el token del header
    const token = req.header('x-token');

    if( !token ){
        return res.status(401).json({
            ok: false,
            errorMessage: 'No hay token en la petición.',
        });
    }


    try{

        const { _id , email } = jwt.verify( token , process.env.SECRET_JWT_SEED );

        // Agregar el id y email al request para que esté disponible en los controladores   
        req._id = _id;
        req.email = email;

    }
    catch( error ){
        console.log(error);
        return res.status(401).json({
            ok: false,
            errorMessage: 'Token no válido.'
        })
    }
    next();
}

module.exports = {
    validateJWT,
}