class Base {
    constructor(atributo) {
        this.atributo = atributo;
    }

    funcaoPai() {
        console.log(`${this.atributo} - atributo da classe pai, função da classe pai`)
    }
}

class Filho extends Base {
    constructor(atributo, text) {
        super(atributo);
        this.text = text;
    }

    funcao() {
        console.log(`${this.atributo} - atributo herdado, função do filho`)
    }
}

let exemplo = new Filho("valor1", "valor2");
exemplo.funcao();
exemplo.funcaoPai();