const { response } = require('express');
const User = require('../models/UserModel');


const registerUser = async( req , res = response ) => {

    const { username , email , password } = req.body;

    try{

        let  userRef = await User.findOne({ 'email' : email });

        console.log(userRef);

        if( userRef ) {
            return res.status(404).json({
                ok : false,
                errorMessage : 'El email que intentas registrar ya se encuentra en uso.',
            });
        }

        // TODO : Hashear la pass y agregar JWT

        userRef = {
            username,
            email,
            password,
        };

         userRef = await User.create( userRef );

        
        return res.status(200).json({
            ok : true,
            errorMessage : undefined,
            userRef,
        });
    }
    catch(error){

        console.log(error);
        return res.status(400).json({
            ok : false,
            errorMessage : "Hubo un error en la creación del usuario. Intente nuevamente."
        });
    }
}

module.exports = {
    registerUser,
}