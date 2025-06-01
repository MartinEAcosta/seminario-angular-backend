/*
------------------------------------------------
      Rutas de Cursos
        examplepath.com/api/course/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { getAllCourses , createCourse , updateCourse } = require('../controllers/CourseController');


const router = Router();

// GetAll Courses
router.get(
  '/',
  getAllCourses
)

// Create Course
router.post(
  '/new',
  createCourse
)

// Edit Course 
router.put(
  '/update/:id',
  updateCourse
)




module.exports = router;