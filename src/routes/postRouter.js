const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/postController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/post", post_controller.post_create);
router.get("/post", post_controller.post_getall);
router.get("/post/:id", post_controller.post_getbyid);
router.put("/post/:id", post_controller.post_update);
router.delete("/post/:id", post_controller.post_delete);

module.exports = router;