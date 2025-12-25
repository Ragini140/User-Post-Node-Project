const router = require('express').Router();
const USER_POST_CONTROLLER = require('../controller/userPost');
const { validate } = require('express-validation');
const { isAuth } = require('../middleware/authToken');
const upload = require("../middleware/fileUpload");
const { createPost, getAllUserPost, increaseLike, getUserWisePost } = require('../validation/userPost')

router.post('/', isAuth,  upload.single('file'), validate(createPost), USER_POST_CONTROLLER.createPost)
router.get('/get',validate(getAllUserPost), USER_POST_CONTROLLER.getAllUserPost)
router.post('/:id/like',isAuth, validate(increaseLike), USER_POST_CONTROLLER.increaseLike)
router.get('/user/:userId', validate(getUserWisePost), USER_POST_CONTROLLER.getUserWisePost)

module.exports= router;