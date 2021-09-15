const mongoose = require('mongoose')

const AmigosSchema = new mongoose.Schema({
    contacto: {
        type: String,
        required: true
    },
    amigo: {
        type: String,
        required: true,
    }
})

const Amigos = mongoose.model('amigos', AmigosSchema);
module.exports = Amigos;