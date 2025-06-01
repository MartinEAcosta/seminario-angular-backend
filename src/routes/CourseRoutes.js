/*
------------------------------------------------
      Rutas de Cursos
        examplepath.com/api/course/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { getCourses , createCourse } = require('../controllers/CourseController');


const router = Router();

// GetAll Courses
router.get(
  '/',
  getCourses
)

// Create Course
router.post(
  '/new',
  createCourse
)






module.exports = router;