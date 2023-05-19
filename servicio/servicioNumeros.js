import NumerosModel from "../model/numerosModel.js";

class ServicioNumeros {
  constructor() {
    this.NumerosModel = new NumerosModel();
  }

  /* MÉTODOS GET */
  async obtenerNumeros() {
    let aux = await this.NumerosModel.obtenerNumeros();
    const numeros = aux.map((n) => n.numero);
    return { numeros };
  }

  obtenerPromedio = async () => {
    const numeros = await this.NumerosModel.obtenerNumeros();
    const suma = numeros.reduce((acc, n) => acc + n.numero, 0);
    return suma / numeros.length;
  };

  //TODO - que devuelva un objeto
  obtenerNumeroMasAltoYMasBajo = async () => {
    const { numeros } = await this.obtenerNumeros();
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
    return { min, max };
  };

  obtenerCantidadDeNumeros = async () => {
    const numeros = await this.NumerosModel.obtenerNumeros();
    return numeros.length;
  };

  /* MÉTODOS POST */
  async guardarNumero(numero) {
    return await this.NumerosModel.guardarNumero(numero);
  }
}

export default ServicioNumeros;
