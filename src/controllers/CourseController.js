const { response } = require('express');
const Course = require('../models/CourseModel');
const User = require('../models/UserModel');

const getCourses = async ( req , res = response ) => {
    try{
        
        const courses = await Course.find({});

        // console.log(courses);

        return res.status(200).json({
            ok: true, 
            errorMessage: undefined,
            courses,
        });

    }
    catch( error ) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            errorMessage: 'Hubo un error al obtener los cursos. Intente nuevamente.',
        });
    } 
}

const createCourse = async ( req , res = response ) => {

    const { title , description , imgURL , owner , price , offer , capacity } = req.body;

    try{

        const existUser = await User.findById( owner );

        if( existUser ){
            const course = new Course({
                title,
                description,
                imgURL,
                owner,
                offer,
                price,
                capacity,
            });
            
            await course.save();

            return res.status(201).json({
                ok: true,
                errorMessage: undefined,
                course,
            });
        }
        else{
            return res.status(400).json({
                ok: false,
                errorMessage: 'El usuario no existe. Verifique el ID y vuelva a intentarlo.',
            });
        }
    }
    catch( error ){
        console.log(error);

        return res.status(500).json({
            ok: false,
            errorMessage: 'Hubo un error al crear el curso. Intente nuevamente.',
        });
    }
}

module.exports = {
    getCourses,
    createCourse,
}