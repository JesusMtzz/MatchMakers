const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Ocupa un nombre"],
  },
  genero: {
    type: String,
    required: [true, "Ocupa un genero"],
  },
  imagen: {
    type: String,
    required: [true, "Ocupa una imagen"],
  },
});

const Game = mongoose.model("game", rateUserSchema);

module.exports = Game;
