const { Schema, model } = require("mongoose");

const UserModel = Schema({

    username : {
        type: String,
        required: true,
    },

    email : {
        type: String,
        required: true,
        unique: true,
    },

    password : {
        type: String,
        required: true,
    }

});

module.exports = model( 'User' , UserModel )