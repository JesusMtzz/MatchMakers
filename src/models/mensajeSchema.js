const mongoose = require('mongoose')

const MensajeSchema = new mongoose.Schema({
    chat: {
        type: String,
        required: true
    },
    remitente: {
        type: String,
        required: true
    },
    cuerpo: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    fecha: {
        type: Date,
        required: true
    }
})

const Mensaje = mongoose.model('mensaje', MensajeSchema);
module.exports = Mensaje;