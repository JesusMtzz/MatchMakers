const mongoose = require("mongoose");

const postComentarioSchema = new mongoose.Schema({
  autor: {
    type: String,
    required: [true, "Ocupa el nombre de quien comento"],
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  cuerpo: {
    type: String,
    maxlength: 255,
    required: [true, "Ocupa un escribir algo en el post"],
  },
  reaccion: {
    type: Number,
    default: 0,
  },
});

const PostComentario = mongoose.model("post", postComentarioSchema);

module.exports = PostComentario;