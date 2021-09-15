const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
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

const Chat = mongoose.model('chat', ChatSchema);
module.exports = Chat;