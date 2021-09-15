const comentarioPost = require("../models/comentarioPostSchema");

exports.comentarioPost_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newcomentarioPost = new comentarioPost(body);

  newcomentarioPost
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newcomentarioPost);
};

exports.comentarioPost_getall = async (req, res) => {
  const data = await comentarioPost.find();

  res.send(data);
};

exports.comentarioPost_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await comentarioPost.findById(id);
  res.send(data);
};

exports.comentarioPost_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await comentarioPost.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.comentarioPost_delete = async (req, res) => {
  const { id } = req.params;
  await comentarioPost.deleteOne({ _id: id });
  res.send({ message: "comentario borrado" });
};

//CRUD