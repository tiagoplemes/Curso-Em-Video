class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    ola () {
        console.log(`Olá ${this.nome}`);
    }
}

let pessoa = new Pessoa('José', 25);
pessoa.ola();


class MinhaClasse {
    constructor(atributoPassadoInicial) {
        this.atributo = atributoPassadoInicial
    }

    get obterAtributo() {
        return this.atributo;
    }

    set mudarAtributo(novoValor) {
        this.atributo = novoValor;
    }
}

var novaClasse = new MinhaClasse("Teste");
console.log(novaClasse.obterAtributo);

novaClasse.mudarAtributo = "Teste 123";
console.log(novaClasse.obterAtributo);
