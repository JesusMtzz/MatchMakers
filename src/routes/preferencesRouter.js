const express = require("express");
const router = express.Router();

const preferences_controller = require("../controllers/preferencesController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/preferences", preferences_controller.preferences_create);
router.get("/preferences", preferences_controller.preferences_getall);
router.get("/preferences/:id", preferences_controller.preferences_getbyid);
router.put("/preferences/:id", preferences_controller.preferences_update);
router.delete("/preferences/:id", preferences_controller.preferences_delete);

module.exports = router;
