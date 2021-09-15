const post = require("../models/postSchema");

exports.post_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newpost = new post(body);

  newpost
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newpost);
};

exports.post_getall = async (req, res) => {
  const data = await post.find();

  res.send(data);
};

exports.post_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await post.findById(id);
  res.send(data);
};

exports.post_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await post.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.post_delete = async (req, res) => {
  const { id } = req.params;
  await post.deleteOne({ _id: id });
  res.send({ message: "post borrado" });
};

//CRUD