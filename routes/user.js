const router = require('express').Router();
const USER_CONTROLLER = require('../controller/user');
const { isAuth } = require('../middleware/authToken');
const { validate } = require('express-validation');
const {userRegister, loginUser } = require('../validation/user')

router.post('/register', validate(userRegister), USER_CONTROLLER.userRegister);
router.post('/login',validate(loginUser), USER_CONTROLLER.userLogin);
router.get('/profile', isAuth, USER_CONTROLLER.getUserProfile);

module.exports= router;