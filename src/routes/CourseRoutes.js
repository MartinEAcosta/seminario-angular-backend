/*
------------------------------------------------
      Rutas de Cursos
        examplepath.com/api/course/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { getAllCourses , createCourse , updateCourse , deleteCourse } = require('../controllers/CourseController');
const { validateJWT } = require('../middlewares/validateJWT');


const router = Router();

// GetAll Courses
router.get(
  '/',
  getAllCourses
)

// Create Course
router.post(
  '/new',
  validateJWT,
  createCourse
)

// Edit Course 
router.put(
  '/update/:id',
  validateJWT,
  updateCourse,
)

// Delete Course
router.delete(
  '/delete/:id',
  validateJWT,
  deleteCourse
)



module.exports = router;