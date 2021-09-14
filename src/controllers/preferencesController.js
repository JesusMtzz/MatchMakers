const Preference = require("../models/preferencesSchema");

exports.preferences_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newpreference = new Preference(body);

  newpreference
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newpreference);
};

exports.preferences_getall = async (req, res) => {
  const data = await Preference.find();

  res.send(data);
};

exports.preferences_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await Preference.findById(id);
  res.send(data);
};

exports.preferences_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await Preference.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.preferences_delete = async (req, res) => {
  const { id } = req.params;
  await Preference.deleteOne({ _id: id });
  res.send({ message: "Preferencias borradas" });
};

//CRUD
