const { Joi } = require('express-validation');

exports.userRegister = {
  body: Joi.object({
    user_name: Joi.string().trim().max(255) .required().messages({'any.required': 'Name is required', 'string.empty': 'Name must be required'}),
    email: Joi.string().trim().email().max(255).required().messages({'any.required': 'Email is required', 'string.empty': 'Email must be required'}),
    password: Joi.string().trim().max(255).required().messages({ 'any.required': 'Password is required','string.empty': 'Password must be required' }),
  })
};

exports.loginUser = {
  body: Joi.object({
    email: Joi.string().trim().email().max(255).required().messages({'any.required': 'Email is required','string.empty': 'Email must be required' }),
    password: Joi.string().trim().max(255).required().messages({ 'any.required': 'Password is required', 'string.empty': 'Password must be required' }),
  })
};
