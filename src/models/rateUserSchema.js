const mongoose = require("mongoose");

const rateUserSchema = new mongoose.Schema({
  calif: {
    type: Number,
    default: 0,
    required: [true, "Ocupa calificacion este campo"],
  },
  Comment: {
    type: String,
    required: [true, "Es necesario un comentario"],
  },
  id_user_calif: {
    type: String,
  },
  id_user_author: {
    type: String,
  },
  date_posted: {
    type: Date,
    default: Date.now,
  },
});

const RateUser = mongoose.model("rateUser", rateUserSchema);

module.exports = RateUser;
