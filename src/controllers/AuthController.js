const { response } = require('express');


const registerUser = async( req , res = response ) => {

    try{

        
        return res.status(200).json({
            ok : true,
            errorMessage : undefined,
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