const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
  title: { type: String, maxlength: 100, required: true },
  category: {
    type: String,
    enum: ["Development", "Design", "Innovation", "Tutorial", "Business"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  media: [
    {
      type: String,
      validate: /^https?:\/\//,
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      text: { type: String, required: true },
      created_at: { type: Date, default: Date.now },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
},{
    versionKey:false
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
