const { Noh } = require("./noh.js");

// O comportamento da lista será de fila

class ListaDuplamenteEncadeada {
    constructor() {
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
    }

    inserir_final (valor) {
        const novo_noh = new Noh(valor)
 
        if (!this.cabeca) {
            this.cabeca = novo_noh
            this.cauda = novo_noh
        } else {
            novo_noh.anterior = this.cauda;
            this.cauda.proximo = novo_noh;
            this.cauda = novo_noh;
        }

        this.tamanho++
    }

    remover_inicio () {
        if (!this.cabeca) {
            throw new Error("A lista está vazia, não é possível remover.");
        }

        const removido = this.cabeca.valor;
        this.cabeca = this.cabeca.proximo;

        if (this.cabeca) {
            this.cabeca.anterior = null;
        } else {
            this.cauda = null;
        }

        this.tamanho--;

        return removido;
    }

    ordena_por_rating () {
        let troca;

        let atual = this.cabeca;

        for (let i = 0; i < this.tamanho - 1; i++) {
            if (atual.valor.rating > atual.proximo.valor.rating) {
                const temp = atual.valor;
                atual.valor = atual.proximo.valor;
                atual.proximo.valor = temp;

                troca = true;
            }

            atual = atual.proximo;
        }

        if (!troca) {
            return "Lista ordenada"
        }
    }

    travessia () {
        let atual = this.cabeca;
        while (atual) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
};

const lista = new ListaDuplamenteEncadeada();

lista.inserir_final({ rating: 3.5 });
lista.inserir_final({ rating: 1.2 });
lista.inserir_final({ rating: 2.8 });

console.log("Antes de ordenar:");
lista.travessia();

lista.ordena_por_rating();

console.log("Depois de ordenar por rating:");
lista.travessia();

module.exports = {
    ListaDuplamenteEncadeada,
};
