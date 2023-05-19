class NumerosModel {
  constructor() {
    this.numeros = [1,2,3];
  }

  obtenerNumeros = async () => {
    try {
      return this.numeros;
    } catch (error) {
      console.log("error en obtenerNumeros: ", error);
      return [];
    }
  };

  guardarNumero = async (numero) => {
    try {
      this.numeros.push(numero);
      return numero;
    } catch (error) {
      console.log("error en guardarNumero: ", error);

      return {};
    }
  };
}

export default NumerosModel;
