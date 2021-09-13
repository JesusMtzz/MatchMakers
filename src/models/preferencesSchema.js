const mongoose = require("mongoose");

const preferencesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
    unique: true,
  },
  year: {
    type: Number,
    default: 1,
  },
});

const Preference = mongoose.model("preference", preferencesSchema);

module.exports = Preference;
