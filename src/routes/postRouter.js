const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/postController");
const checkJwt = require("../middleware/checkJwt");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/posti",checkJwt, post_controller.post_create);
router.get("/posti",checkJwt, post_controller.post_getall);
router.get("/posti/:id", post_controller.post_getbyid);
router.put("/posti/:id", post_controller.post_update);
router.delete("/posti/:id", post_controller.post_delete);

module.exports = router;
