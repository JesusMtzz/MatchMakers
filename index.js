const express = require("express");
const bodyParser = require("body-parser");
require("./src/models/connection");
/* requires de rutas */
const preferences_router = require("./src/routes/preferencesRouter");

const rateUser_router = require("./src/routes/rateUserRouter");

const app = express();
const port = 3000; // 5000 // 5001;

app.use(bodyParser.json());
app.use("/api", preferences_router);
app.use("/api", rateUser_router);

app.listen(port, () => {
  console.log("la app escucha el puerto http://localhost:" + port);
});
