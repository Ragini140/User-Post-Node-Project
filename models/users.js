const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model( "users", new Schema(
   {
      user_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);