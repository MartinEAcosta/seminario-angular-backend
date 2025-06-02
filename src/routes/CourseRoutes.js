/*
------------------------------------------------
      Rutas de Cursos
        examplepath.com/api/course/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { getAllCourses , createCourse , updateCourse , deleteCourse } = require('../controllers/CourseController');


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

// Delete Course
router.delete(
  '/delete/:id',
  deleteCourse
)



module.exports = router;