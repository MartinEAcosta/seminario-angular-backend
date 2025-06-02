const { response } = require('express');
const Course = require('../models/CourseModel');
const User = require('../models/UserModel');

const getAllCourses = async ( req , res = response ) => {
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

const updateCourse = async( req , res = response ) => {

    const { id } = req.params;
    const { title , description , imgURL , owner , price , offer , capacity } = req.body;

    try{

        const course = await Course.findById( id );

        if( !course ){
            return res.status(404).json({
                ok: false,
                errorMessage: 'El curso no existe. Verifique el ID y vuelva a intentarlo.',
            });
        }else{

            const ownerExists = await User.findById( owner );

            if( !ownerExists){
                return res.status(400).json({
                    ok: false,
                    errorMessage: 'El usuario no existe. Verifique el ID y vuelva intentarlo'
                })
            }else if( ownerExists._id.toString() !== course.owner.toString() ){
                return res.status(403).json({
                    ok: false,
                    errorMessage: 'No tiene permiso para actualizar este curso.',
                });
            }

            course.title = title;
            course.description = description;
            course.imgURL = imgURL;
            course.owner = owner;
            course.price = price;
            course.offer = offer;
            course.capacity = capacity;

            await course.save();
            
            return res.status(200).json({
                ok: true,
                errorMessage: undefined,
                course,
            });
        }
    }
    catch( error ){
        console.log(error);

        return res.status(500).json({
            ok: false,
            errorMessage: 'Hubo un error al actualizar el curso. Intente nuevamente.',
        });
    }
}

const deleteCourse = async( req , res = response ) => {

    const { id } = req.params;

    console.log(req);

    try{

        const course = await Course.findById( id );

        if( !course ){
            return res.status(404).json({
                ok: false,
                errorMessage: 'El curso no existe. Verifique el ID e intente nuevamnte.'
            });
        }

        const ownerExists = await User.findById( course.owner );

        if( !ownerExists ){
            return res.status(400).json({
                ok: false,
                errorMessage: 'El usuario no existe. Verifique el ID e intente nuevamnte.'
            });
        }


    
    }
    catch( error ){
        console.log(error);

        return res.status(500).json({
            ok: false,
            errorMessage: 'Hubo un error al eliminar el curso. Intente nuevamente.'
        })
    }
}


module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
}