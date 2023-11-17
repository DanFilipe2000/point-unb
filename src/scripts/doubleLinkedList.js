const { Noh } = require("./noh.js");

// O comportamento da lista será de fila

class ListaDuplamenteEncadeada {
    constructor() {
        this.cabeca = null;
        this.cauda = null;
    }

    inserir_inicio(valor) {
        const novo_no = new Noh(valor);

        novo_no.proximo = this.cabeca;

        if (this.cabeca) {
            this.cabeca.anterior = novo_no;
        } else {
            this.cauda = novo_no;
        };

        this.cabeca = novo_no;
    }

    deletar_final() {
        if (!this.cabeca) {
            return
        }

        if (!this.cabeca.proximo) {
            self.cabeca = null;
            self.cauda = null;

            return
        }

        this.cauda.anterior.proximo = null;
        this.cauda = this.cauda.anterior;
    }
}

module.exports = {
    DoubleLinkedList,
}
