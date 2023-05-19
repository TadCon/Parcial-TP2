import ServicioNumeros from "../servicio/servicioNumeros.js";

//TODO - Revisar que no haya nota

class ControladorNumeros {
  constructor() {
    this.ServicioNumeros = new ServicioNumeros();
  }

  /* MÉTODOS GET */
  obtenerNumeros = async (req, res) => {
    try {
      const numeros = await this.ServicioNumeros.obtenerNumeros();

      res.send(numeros);
    } catch (error) {
      console.log("error al obtenerNumeros: ", error);
    }
  };

  obtenerPromedio = async (req, res) => {
    try {
      const promedio = await this.ServicioNumeros.obtenerPromedio();
      res.json({ promedio });
    } catch (error) {
      console.log("error obtenerPromedio", error);
    }
  };

  obtenerNumeroMasAltoYMasBajo = async (req, res) => {
    try {
      const numero = await this.ServicioNumeros.obtenerNumeroMasAltoYMasBajo();
      res.json(numero);
    } catch (error) {
      console.log("error obtenerCantidadNotaAlta", error);
    }
  };

  obtenerCantidadDeNumeros = async (req, res) => {
    try {
      const cantidad = await this.ServicioNumeros.obtenerCantidadDeNumeros();
      res.json({ cantidad });
    } catch (error) {
      console.log("error obtenerCantidadDeNumeros", error);
    }
  };

  /* MÉTODOS POST */
  guardarNumero = async (req, res) => {
    try {
      let numero = req.body;
      let numeroGuardado = await this.ServicioNumeros.guardarNumero(numero);

      res.json(numeroGuardado);
    } catch (error) {
      console.log("error obtenerNumeros", error);
    }
  };
}

export default ControladorNumeros;
