import express from "express";
import ControladorNumeros from "../controlador/controladorNumeros.js";

class RouterNumeros {
  constructor() {
    this.ControladorNumeros = new ControladorNumeros();
    this.router = express.Router();
  }

  start() {
    /* RUTAS GET */
    this.router.get("/entrada", this.ControladorNumeros.obtenerNumeros);
    this.router.get("/promedio", this.ControladorNumeros.obtenerPromedio);
    this.router.get("/minmax", this.ControladorNumeros.obtenerNumeroMasAltoYMasBajo);
    this.router.get("/cantidad", this.ControladorNumeros.obtenerCantidadDeNumeros);

    /* RUTAS POST */
    this.router.post("/entrada", this.ControladorNumeros.guardarNumero);

    return this.router;
  }
}

export default RouterNumeros;
