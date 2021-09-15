const express = require("express");
const router = express.Router();

const squad_controller = require("../controllers/squadController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/squad", squad_controller.squad_create);
router.get("/squad", squad_controller.squad_getall);
router.get("/squad/:id", squad_controller.squad_getbyid);
router.put("/squad/:id", squad_controller.squad_update);
router.delete("/squad/:id", squad_controller.squad_delete);

module.exports = router;
