const { Noh } = require("./noh.js");

// O comportamento da lista será de fila

class ListaDuplamenteEncadeada {
    constructor() {
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
        this.lista = []
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

    ordena_por_nota () {
        let troca;

        let atual = this.cabeca;

        for (let i = 0; i < this.tamanho - 1; i++) {
            if (atual.valor.nota > atual.proximo.valor.nota) {
                const temp = atual.valor;
                atual.valor = atual.proximo.valor;
                atual.proximo.valor = temp;

                troca = true;
            }

            atual = atual.proximo;
        }

        if (!troca) {
            return "A lista já está ordenada"
        }
    }

    retorna_tudo () {
        let atual = this.cabeca;

        while (atual) {
            this.lista.append(atual.valor);
            atual = atual.proximo;
        }

        return this.lista;
    }

    travessia () {
        let atual = this.cabeca;

        while (atual) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
};

module.exports = {
    ListaDuplamenteEncadeada,
};
