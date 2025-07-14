const { response } = require('express');
const Enrollment = require('../models/EnrollmentModel');

const getCoursesByUserID = async ( req , res = response ) => {
    try{

        const course = await Enrollment.find({ idUser: idUser });

    }
    catch(error) {
        console.log(error);
    }
}