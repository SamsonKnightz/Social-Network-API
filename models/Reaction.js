const mongoose  = require('mongoose');

// Schema to create a course model
const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Number,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = reactionSchema;
