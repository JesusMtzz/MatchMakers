const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")


require("./src/models/connection");
/* requires de rutas */
const preferences_router = require("./src/routes/preferencesRouter");

const rateUser_router = require("./src/routes/rateUserRouter");

const amigos_router = require("./src/routes/amigosRouter");

const chat_router = require("./src/routes/chatRouter");

const comentarioPost_router = require("./src/routes/comentarioPostRouter");

const game_router = require("./src/routes/gameRouter");

const mensaje_router = require("./src/routes/mensajeRouter");

const post_router = require("./src/routes/postRouter");

const squad_router = require("./src/routes/squadRouter");

const user_router = require("./src/routes/userRouter");

const app = express();
const port = 5000; // 5000 // 5001;
app.use(cors())
app.use(bodyParser.json());
app.use("/api", preferences_router);
app.use("/api", rateUser_router);
app.use("/api", amigos_router);
app.use("/api", chat_router);
app.use("/api", comentarioPost_router);
app.use("/api", game_router);
app.use("/api", mensaje_router);
app.use("/api", post_router);
app.use("/api", squad_router);
app.use("/api", user_router);

app.listen(port, () => {
  console.log("la app escucha el puerto http://localhost:" + port);
});
