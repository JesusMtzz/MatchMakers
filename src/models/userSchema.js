const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Necesita Nombre"],
    },
    last_name: {
        type: String,
        required: [true, "Necesita Apellidos"],
      },
    username:{
        type: String,
        required: [true, "Necesita nombre de usuario"]
    },
    email: {
        type: String,
        required: [true, "Necesita un correo"]
    },
    social_networks: [{
        type: String,
    }],
    gamer_tags: [{
        type: String,

    }],
    profile_pic:{
        type: String,
    },
    background_pic:{
        type: String,
    },
    date_register: {
        type: Date,
        default: Date.now,
    },
    languages:[{
        type: String,
    }],
    platforms:[{
        type: String,
    }],
    favorite_games:[{
        type: String,
    }],
  });

const User = mongoose.model("user", userSchema);

module.exports = User;