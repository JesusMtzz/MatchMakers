const express = require("express");
const router = express.Router();

const comentarioPost_controller = require("../controllers/comentarioPostController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/comentarioPost", comentarioPost_controller.comentarioPost_create);
router.get("/comentarioPost", comentarioPost_controller.comentarioPost_getall);
router.get("/comentarioPost/:id", comentarioPost_controller.comentarioPost_getbyid);
router.put("/comentarioPost/:id", comentarioPost_controller.comentarioPost_update);
router.delete("/comentarioPost/:id", comentarioPost_controller.comentarioPost_delete);

module.exports = router;