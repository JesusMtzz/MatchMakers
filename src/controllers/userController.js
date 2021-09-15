const user = require("../models/userSchema");

exports.user_create = (req, res) => {
  const { body } = req;

  let newuser = new user(body);

  newuser
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));
  res.send(newuser);
};

exports.user_getall = async (req, res) => {
  const data = await user.find();
  res.send(data);
};

exports.user_getbyid = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const data = await user.findById(id);
  res.send(data);
};

exports.user_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = await user.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.user_delete = async (req, res) => {
  const { id } = req.params;
  await user.deleteOne({ _id: id });
  res.send({ message: "Usuario borrado" });
};