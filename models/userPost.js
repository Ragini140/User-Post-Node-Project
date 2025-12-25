const { allow } = require('joi');
const mongoose = require('mongoose');
const { type } = require('node:os');
const Schema = mongoose.Schema;

module.exports = mongoose.model( "posts", new Schema(
   {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',          
        required: true,
      },
      caption: {
        type: String,
        required: true,
      },
      like: {
       type: Number,
       default: 0
      },
      file:{
        type: String,
        default: null,
        required: false
      }
    },
    { timestamps: true }
  )
);