const express = require("express");
const router = express.Router();

const rateUser_controller = require("../controllers/rateUserController");
//indicar
//-metodo HTTP
//-ruta
//-funcion

router.post("/rateUser", rateUser_controller.rateUser_create);
router.get("/rateUser", rateUser_controller.rateUser_getall);
router.get("/rateUser/:id", rateUser_controller.rateUser_getbyid);
router.put("/rateUser/:id", rateUser_controller.rateUser_update);
router.delete("/rateUser/:id", rateUser_controller.rateUser_delete);

module.exports = router;
