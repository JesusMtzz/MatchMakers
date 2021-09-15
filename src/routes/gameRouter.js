const express = require("express");
const router = express.Router();

const game_controller = require("../controllers/gameController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/game", game_controller.game_create);
router.get("/game", game_controller.game_getall);
router.get("/game/:id", game_controller.game_getbyid);
router.put("/game/:id", game_controller.game_update);
router.delete("/game/:id", game_controller.game_delete);

module.exports = router;