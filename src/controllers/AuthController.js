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

        // TODO : Hashear la pass y agregar JWT
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
        return res.status(400).json({
            ok : false,
            errorMessage : "Hubo un error en la creación del usuario. Intente nuevamente."
        });
    }
}

const loginUser = async( req , res = response ) => {

    const { email , password } = req.body;

    try{

        


    }
    catch(error) {


        console.log(error);
    }
}

module.exports = {
    registerUser,
}