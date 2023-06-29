class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  soma() {
    return this.num1 + this.num2;
  }

  subtracao() {
    return this.num1 - this.num2;
  }

  divisao() {
    if (this.num2 !== 0) {
      return this.num1 / this.num2;
    } else {
      return "Erro: Divisão por zero não é permitida.";
    }
  }

  multiplicacao() {
    return this.num1 * this.num2;
  }
}

const calculadora = new Calculadora(10, 5);
console.log("Soma:", calculadora.soma());  // Soma: 15
console.log("Subtração:", calculadora.subtracao());  // Subtração: 5
console.log("Divisão:", calculadora.divisao());  // Divisão: 2
console.log("Multiplicação:", calculadora.multiplicacao());  // Multiplicação: 50


