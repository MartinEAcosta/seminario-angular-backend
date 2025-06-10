const { response } = require('express');
const bcrypt =  require('bcrypt');
const User = require('../models/UserModel');
const { generateJWT } = require('../helpers/generateJWT');


const registerUser = async( req , res = response ) => {

    const { username , email , password } = req.body;

    try{

        let userRef = await User.findOne({ 'email' : email });

        if( userRef ) {
            return res.status(404).json({
                ok : false,
                errorMessage : 'El email que intentas registrar ya se encuentra en uso.',
            });
        }

        userRef = new User( req.body );

        const salt =  bcrypt.genSaltSync( );
        const passwordHashed = bcrypt.hashSync( password , salt );
        
        userRef.password = passwordHashed;
        
        await userRef.save();

        const token = await generateJWT( userRef.email , userRef._id );
        
        return res.status(200).json({
            ok : true,
            errorMessage : undefined,
            userRef,
            token,
        });
    }
    catch(error){

        console.log(error);
        return res.status(500).json({
            ok : false,
            errorMessage : "Hubo un error en la creación del usuario. Intente nuevamente."
        });
    }
}

const loginUser = async( req , res = response ) => {

    const { email , password } = req.body;

    try{

        let userRef = await User.findOne({ 'email' : email });

        if( userRef ){

            const isPasswordLegit = bcrypt.compareSync( password , userRef.password );

            if( !isPasswordLegit ){
                return res.status(404).json({
                    ok : false, 
                    errorMessage : 'Chequee las credenciales y vuelva a intentarlo.'
                });
            }

            const token = await generateJWT( userRef._id , userRef.email );

            return res.status(200).json({
                ok : true, 
                errorMessage : undefined,
                userRef,
                token,
            });
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            errorMessage : "Hubo un error en el inicio de sesión. Intente nuevamente."
        });
    }
}

const reloadToken = async( req , res = response ) => {

    const { _id , email } = req;

    try{

        const userRef = await User.findById( _id );

        if( !userRef ){
            return res.status(404).json({
                ok : false,
                errorMessage : 'Usuario no encontrado.'
            });
        }

        const token = await generateJWT( _id , email );

        return res.status(200).json({
            ok : true,
            errorMessage : undefined,
            userRef,
            token,
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            ok : false,
            errorMessage : "Hubo un error al recargar el token. Intente nuevamente."
        });
    }
}

module.exports = {
    registerUser,
    loginUser,
    reloadToken,
}