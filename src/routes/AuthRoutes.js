/*
------------------------------------------------
      Rutas de Autenticación/Usuario
        examplepath.com/api/auth/ 
------------------------------------------------
*/ 

const { Router } = require('express');
const { registerUser , loginUser , reloadToken } = require('../controllers/AuthController');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields'); 
const { validateJWT } = require('../middlewares/validateJWT'); 


const router = Router();

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

router.get(
    '/renew',
    [
        validateJWT,
    ],
    reloadToken
)

module.exports = router;