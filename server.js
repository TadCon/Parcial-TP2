import express from "express";
import RouterNumeros from "./router/routerNumeros.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());

const routerNumeros = new RouterNumeros();

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use("/parcial/numeros", routerNumeros.start());

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en http://localhost:${PORT}`)
);
server.on("error", (error) =>
  console.log("Error con el servidor express:", error)
);
