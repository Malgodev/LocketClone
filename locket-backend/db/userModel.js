const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login_name: { type: String },
  password: { type: String },
  first_name: { type: String },
  last_name: { type: String, default: "" },
  location: { type: String, default: ""},
  description: { type: String, default: ""},
  occupation: { type: String, default: ""},
});

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);

// const photoSchema = new mongoose.Schema({
//   // _id: mongoose.Schema.Types.ObjectId,
//   file_name: { type: String },
//   date_time: { type: Date, default: Date.now },
//   user_id: mongoose.Schema.Types.ObjectId,
//   comments: [commentSchema],
// });