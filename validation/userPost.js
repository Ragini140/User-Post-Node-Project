const { Joi } = require('express-validation');

exports.createPost = {
  body: Joi.object({
    caption : Joi.string().trim().max(255).required().messages({'any.required': 'Caption is required', 'string.empty': 'Caption must be required'}),
    file: Joi.any().optional() 
  })
};

exports.getAllUserPost = {
  query: Joi.object({
    startRow: Joi.number().integer().optional(),
    endRow: Joi.number().integer().optional(),
  })
};

exports.increaseLike = {
  params: Joi.object({
      id: Joi.string().length(24).hex().required().messages({'any.required': 'User ID is required', 'string.empty': 'Name must be required'}),
  })
};

exports.getUserWisePost = {
  params: Joi.object({
    userId: Joi.string().length(24).hex().required().messages({'any.required': 'User ID is required', 'string.empty': 'Name must be required'}),
  })
};