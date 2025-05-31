/*
------------------------------------------------
      Rutas de Autenticación/Usuario
        examplepath.com/api/auth/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { registerUser , loginUser } = require('../controllers/AuthController');


const router = Router();


// TODO: Agregar los middlewares de verificación.

router.post( 
    '/new',
    registerUser
);


router.post( 
    '/',
    loginUser
);




module.exports = router;