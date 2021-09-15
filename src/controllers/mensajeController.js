const mensaje = require("../models/mensajeSchema");

exports.mensaje_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newmensaje = new mensaje(body);

  newmensaje
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newmensaje);
};

exports.mensaje_getall = async (req, res) => {
  const data = await mensaje.find();

  res.send(data);
};

exports.mensaje_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await mensaje.findById(id);
  res.send(data);
};

exports.mensaje_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await mensaje.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.mensaje_delete = async (req, res) => {
  const { id } = req.params;
  await mensaje.deleteOne({ _id: id });
  res.send({ message: "Mensajes eliminados." });
};

//CRUD
