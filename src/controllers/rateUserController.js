const RateUser = require("../models/rateUserSchema");

exports.rateUser_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newrateUser = new RateUser(body);

  newrateUser
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newrateUser);
};

exports.rateUser_getall = async (req, res) => {
  const data = await RateUser.find();

  res.send(data);
};

exports.rateUser_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await RateUser.findById(id);
  res.send(data);
};

exports.rateUser_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await RateUser.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.rateUser_delete = async (req, res) => {
  const { id } = req.params;
  await RateUser.deleteOne({ _id: id });
  res.send({ message: "Calificacion de usuario borrada" });
};

//CRUD
