const router = require('express').Router();

router.use('/auth', require('./user'))
router.use('/posts', require('./userPost'))

module.exports= router;