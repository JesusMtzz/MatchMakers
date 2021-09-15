const chat = require("../models/chatSchema");

exports.chat_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newchat = new chat(body);

  newchat
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newchat);
};

exports.chat_getall = async (req, res) => {
  const data = await chat.find();

  res.send(data);
};

exports.chat_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await chat.findById(id);
  res.send(data);
};

exports.chat_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await chat.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.chat_delete = async (req, res) => {
  const { id } = req.params;
  await chat.deleteOne({ _id: id });
  res.send({ message: "Chat eliminados" });
};

//CRUD
