const { Noh } = require("./noh.js");

// O comportamento da lista será de fila
// Classe implementada baseada na implementação da professora Geovanna - Turma 7 - 

class ListaDuplamenteEncadeada {
    constructor() {
        this.cabeca = null;
        this.cauda = null;
    }

    inserir_inicio = (valor) => {
        const novo_no = new Noh(valor);

        novo_no.proximo = this.cabeca;

        if (this.cabeca) {
            this.cabeca.anterior = novo_no;
        } else {
            this.cauda = novo_no;
        };

        this.cabeca = novo_no;
    };

    inserir_meio = (posicao, valor) => {
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

    inserir_final = (valor) => {
        const novo_no = new Noh(valor);

        if (!this.cabeca) {
            this.cabeca = novo_no;
            this.cauda = novo_no;
            return
        }

        this.cauda.proximo = novo_no;
        novo_no.anterior = this.cauda;
        this.cauda = novo_no;
    };

    ordenar_lista = (sentido) => {
        // Ordenação feita com bubblesort
    };

    deletar_inicio = () => {
        if (!this.cabeca) {
            return;
        };

        if (this.cabeca.proximo) {
            this.cabeca.proximo.anterior = null;
        } else {
            this.cauda = null;
        }

        this.cabeca = this.cabeca.proximo;
    };


    deletar_meio = (posicao) => {
        if (posicao == 0) {
            this.deletar_inicio();
            return;
        };

        let atual = this.cabeca;

        for (let i = 0; posicao; i++) {
            if (atual == null) {
                throw new Error("Posição Inválida");
            };

            atual = atual.proximo;
        };

        if (atual.anterior) {
            atual.anterior.proximo = atual.proximo;
        };

        if (atual.proximo) {
            atual.proximo.anterior = atual.anterior;
        } else {
            this.cauda = atual.anterior;
        };
    };

    deletar_final = () => {
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

    busca = (valor) => {
        let atual = this.cabeca;

        while(atual) {
            if (atual.valor == valor) {
                return true;
            }

            atual = atual.proximo;
        }

        return false;
    };

    travessia = () => {
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
