/*
------------------------------------------------
      Rutas de Autenticación/Usuario
        examplepath.com/api/auth/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { registerUser , loginUser } = require('../controllers/AuthController');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields'); 


const router = Router();


// TODO: Agregar los middlewares de verificación.

router.post( 
    '/new',
    [
        check('username', 'El nombre de usuario no puede estar vació.').notEmpty(),
        check('username', 'El nombre de usuario debe contener al menos 3 caracteres.').isLength({ min : 3}),
        check('email', 'El correo no es válido.').isEmail(),
        check('password', 'La contraseña debe contener al menos 6 caracteres.').isLength({ min : 6}),
        validateFields,
    ],
    registerUser,
);


router.post( 
    '/',
    loginUser
);

module.exports = router;