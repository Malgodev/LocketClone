const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "Please provide a username!"],
    },
    date_time: { type: Date, default: Date.now },
    caption: { type: String },
    images: [{ type: String }],
    like_user_id: [{type: mongoose.Schema.Types.ObjectId}],
    comments: [commentSchema],
  });

  const Post = mongoose.model.Post || mongoose.model("Post", postSchema);

  module.exports = Post;
  