/*
------------------------------------------------
      Rutas de Autenticación/Usuario
        examplepath.com/api/auth/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { registerUser } = require('../controllers/AuthController');


const router = Router();


router.post( 
    '/',
    registerUser
)





module.exports = router;