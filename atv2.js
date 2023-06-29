class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this._salario = salario; // Atributo privado, denotado pelo underscore (_)
  }

  get salario() {
    return this._salario;
  }

  set salario(novoSalario) {
    this._salario = novoSalario;
  }

  aumentarSalario(meta) {
    if (meta) {
      this.salario *= 1.1; // Aumenta o salário em 10% usando o getter e setter
    }
  }

  exibirInformacoes() {
    console.log("Nome:", this.nome);
    console.log("Salário:", this.salario);
  }
}

// Exemplo de uso do programa
const funcionario = new Funcionario("João", 5000);

// Simula o atingimento da meta
const atingiuMeta = true;

funcionario.aumentarSalario(atingiuMeta);
funcionario.exibirInformacoes();