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
    const numeros = await this.NumerosModel.obtenerNumeros();
    const valores = numeros.map((n) => n.numero);

    const minimo = Math.min(...valores);
    const maximo = Math.max(...valores);

    return { minimo, maximo };
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
