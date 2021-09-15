const express = require("express");
const router = express.Router();

const chat_controller = require("../controllers/chatController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/chat", chat_controller.chat_create);
router.get("/chat", chat_controller.chat_getall);
router.get("/chat/:id", chat_controller.chat_getbyid);
router.put("/chat/:id", chat_controller.chat_update);
router.delete("/chat/:id", chat_controller.chat_delete);

module.exports = router;
