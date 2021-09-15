const express = require("express");
const router = express.Router();

const amigos_controller = require("../controllers/amigosController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/amigos", amigos_controller.amigos_create);
router.get("/amigos", amigos_controller.amigos_getall);
router.get("/amigos/:id", amigos_controller.amigos_getbyid);
router.put("/amigos/:id", amigos_controller.amigos_update);
router.delete("/amigos/:id", amigos_controller.amigos_delete);

module.exports = router;
