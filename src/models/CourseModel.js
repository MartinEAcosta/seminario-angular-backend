const { Schema, model } = require('mongoose');

const CourseModel = Schema({

    title : {
        type: String,
        required: true,
    },

    description : { 
        type: String,
        required: true,
    },

    category : {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },

    imgURL : {
        type: [String],
    },

    owner : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    price : {
        type: Number,
        default: 0,
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