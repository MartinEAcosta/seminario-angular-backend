const { Schema , model } = require('mongoose');

const ErollmentModel = Schema({

    idUser : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    idCourse : {
        type: Schema.Types.ObjectId, 
        ref: 'Course',
        required: true,
    },

    purchaseDate : {
        type: Date,
        required: true,
    },

});

enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = model( 'Enrollment' , ErollmentModel );