const mongoose = require("mongoose");

const squadSchema = new mongoose.Schema({
    squad_name: {
      type: String,
      required: [true, "Necesita Nombre de Squad"],
    },
    founder:{
        type: String,
        required: [true, "Necesita fundador"],
    },
    squad_pic:{
        type: String,
    },
    background_squad_pic:{
        type: String,
    },
    date_squad_register: {
        type: Date,
        default: Date.now,
    },
    members:[{
        type: String,
    }],
    admins:[{
        type: String,
    }],
  });

const Squad = mongoose.model("squad", squadSchema);

module.exports = Squad;