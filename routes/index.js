const router = require('express').Router();

router.use('/auth', require('./user'))
router.use('/posts', require('./userPost'))
// router.use('/comments', require('./comment'))

module.exports= router;