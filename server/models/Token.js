const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const tokenSchema = new mongoose.Schema({
  user_id: { type: mongoose.ObjectId, required: true },
  token: { type: String, required: true },
});

module.exports = mongoose.model("Tokens", tokenSchema);
