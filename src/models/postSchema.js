const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  creador: {
    type: String,
    required: [true, "Ocupa el nombre de quien lo creo"],
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  permanencia: {
    type: Date,
    required: [true, "Ocupa una duracion"],
  },
  juego: {
    type: String,
    required: [true, "Escriba que se desea jugar"],
  },
  cuerpo: {
    type: String,
    maxlength: 255,
    required: [true, "Ocupa un escribir algo en el post"],
  },
  categoria: {
    type: String,
  },
});

const Post = mongoose.model("posti", postSchema);

module.exports = Post;
