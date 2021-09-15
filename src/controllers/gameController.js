const game = require("../models/gameSchema");

exports.game_create = (req, res) => {
  //tomar datos del body
  const { body } = req;
  //validacion

  let newgame = new game(body);

  newgame
    .save()
    .then((newDBObject) => console.log("Success", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newgame);
};

exports.game_getall = async (req, res) => {
  const data = await game.find();

  res.send(data);
};

exports.game_getbyid = async (req, res) => {
  //req.query
  console.log(req.params);
  const { id } = req.params;
  //validacion que si traiga algo

  const data = await game.findById(id);
  res.send(data);
};

exports.game_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await game.findOneAndUpdate({ _id: id }, body);
  res.send(data);
};

exports.game_delete = async (req, res) => {
  const { id } = req.params;
  await game.deleteOne({ _id: id });
  res.send({ message: "juego borrado" });
};

//CRUD