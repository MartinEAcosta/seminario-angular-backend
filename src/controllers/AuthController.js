const { response } = require('express');


const registerUser = async( req , res = response ) => {

    return res.status(200).json({
        ok : true,
        errorMessage : undefined,
    });

}

module.exports = {
    registerUser,
}