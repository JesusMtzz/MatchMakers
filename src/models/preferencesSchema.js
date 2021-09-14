const mongoose = require("mongoose");

const preferencesSchema = new mongoose.Schema({
  pais: {
    type: String,
    required: true,
  },
  zonaHoraria: {
    type: Number,
    default: 0,
  },
  PrivSoloAmigos: Boolean,
  horariosJugarIni: {
    type: Number,
    default: 12,
  },
  horariosJugarFin: {
    type: Number,
    default: 14,
  },
});

const Preference = mongoose.model("preference", preferencesSchema);

module.exports = Preference;
