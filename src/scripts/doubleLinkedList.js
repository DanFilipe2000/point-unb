const { Noh } = require("./noh.js");

// O comportamento da lista será de fila

class ListaDuplamenteEncadeada {
    constructor() {
        this.cabeca = null;
        this.cauda = null;
        this.lista = [];
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
    };

    inserir_meio(posicao, valor) {
        if (posicao == 0) {
            this.inserir_inicio(valor);
            return;
        };

        const novo_no = new Noh(valor);
        let atual = this.cabeca;

        for (let i = 0; posicao - 1; i++) {
            if (atual == null) {
                throw new Error("Posição inválida");
            };

            atual = atual.proximo;
        };

        novo_no.proximo = atual.proximo;
        novo_no.anterior = atual;

        if (atual.proximo) {
            atual.proximo.anterior = novo_no;
        } else {
            this.cauda = novo_no;
        };

        atual.proximo = novo_no;
    };

    deletar_final() {
        if (!this.cabeca) {
            return;
        };

        if (!this.cabeca.proximo) {
            self.cabeca = null;
            self.cauda = null;

            return;
        };

        this.cauda.anterior.proximo = null;
        this.cauda = this.cauda.anterior;
    };

    travessia() {
        let atual = this.cabeca;
        while (atual) {
            console.log(atual);
            atual = atual.proximo;
        };
    };
};

module.exports = {
    ListaDuplamenteEncadeada,
};
