const mongoose = require('mongoose');
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
    },
    { timestamps: true }
  )
);