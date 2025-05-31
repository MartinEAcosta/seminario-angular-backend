const { Schema, model } = require('mongoose');
const { type } = require('os');

const CourseModel = Schema({

    title : {
        type: String,
        required: true,
    },

    description : { 
        type: String,
        required: true,
    },

    imgURL : {
        type: String,
        required: true,
    },

    owner : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    price : {
        type: Number,
        required: true,
    },

    offer : {
        type: Boolean,
        default: false,
    },

    capacity : {
        type: Number,
        default: undefined,
    },


});

module.exports = model( 'Course' , CourseModel );