const { Router } = require('express');
const { registerUser } = require('../controllers/AuthController');


const router = Router();


router.get( 
    '/',
    registerUser
)





module.exports = router;