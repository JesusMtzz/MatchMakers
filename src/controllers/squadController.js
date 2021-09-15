const squad = require("../models/squadSchema");

exports.squad_create = (req, res) => {
  const { body } = req;

  let newsquad = new squad(body);

  newsquad
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));
  res.send(newsquad);
};

exports.squad_getall = async (req, res) => {
  const data = await squad.find();
  res.send(data);
};

exports.squad_getbyid = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const data = await squad.findById(id);
  res.send(data);
};

exports.squad_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = await squad.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.squad_delete = async (req, res) => {
  const { id } = req.params;
  await squad.deleteOne({ _id: id });
  res.send({ message: "Squad borrada" });
};