/*
------------------------------------------------
      Rutas de Cursos
        examplepath.com/api/course/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { check } = require('express-validator');
const { getAllCourses , createCourse , updateCourse , deleteCourse } = require('../controllers/CourseController');
const { validateJWT } = require('../middlewares/validateJWT');
const { validateFields } = require('../middlewares/validateFields');


const router = Router();

// GetAll Courses
router.get(
  '/',
  getAllCourses
)

// Create Course
router.post(
  '/new',
  [
    check( 'title', 'El titulo no puede estar vació.' ).notEmpty(),
    check( 'description', 'La descripción no puede estar vacia.' ).notEmpty(),
    check( 'imgURL', 'La URL de la imagen no puede estar vacia.' ).notEmpty(),
    check( 'owner', 'El propietario no puede estar vacio.' ).notEmpty(),
    check( 'price', 'El precio no puede estar vacio.' ).notEmpty(),
    validateFields,
    validateJWT,
  ],
  createCourse
)

// Edit Course 
router.put(
  '/update/:id',
  [
    check( 'title', 'El titulo no puede estar vació.' ).notEmpty(),
    check( 'title', 'El titulo debe tener al menos 5 caracteres.').isLength({ min : 5}),
    check( 'description', 'La descripción no puede estar vacia.' ).notEmpty(),
    check( 'imgURL', 'La URL de la imagen no puede estar vacia.' ).notEmpty(),
    check( 'owner', 'El propietario no puede estar vacio.' ).notEmpty(),
    check( 'price', 'El precio no puede estar vacio.' ).notEmpty(),
    validateFields,
    validateJWT,
  ],
  updateCourse,
)

// Delete Course
router.delete(
  '/delete/:id',
  validateJWT,
  deleteCourse
)



module.exports = router;