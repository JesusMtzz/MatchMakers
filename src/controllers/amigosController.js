const amigos = require("../models/amigosSchema");

exports.amigos_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newamigos = new amigos(body);

  newamigos
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newamigos);
};

exports.amigos_getall = async (req, res) => {
  const data = await amigos.find();

  res.send(data);
};

exports.amigos_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await amigos.findById(id);
  res.send(data);
};

exports.amigos_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await amigos.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.amigos_delete = async (req, res) => {
  const { id } = req.params;
  await amigos.deleteOne({ _id: id });
  res.send({ message: "Amigos eliminados" });
};

//CRUD
