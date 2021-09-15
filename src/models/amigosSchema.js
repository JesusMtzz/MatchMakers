const mongoose = require('mongoose')

const AmigosSchema = new mongoose.Schema({
    miembros: [{
        type: String,
        required: true
    }],
    imagen: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 128
    }
})

const Amigos = mongoose.model('amigos', AmigosSchema);
module.exports = Amigos;