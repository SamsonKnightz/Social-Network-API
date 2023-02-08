const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      max_length: 50,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Virtual called friendCount that retrieves the length of the users friends array field on query.
userSchema.virtual('friendCount').get(function (){
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
