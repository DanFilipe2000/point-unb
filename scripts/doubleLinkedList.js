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

        this.ordena_por_nota();
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
            if (parseInt(atual.valor.nota) > parseInt(atual.proximo.valor.nota)) {
                const temp = atual.valor;
                atual.valor = atual.proximo.valor;
                atual.proximo.valor = temp;

                troca = true;
            }

            atual = atual.proximo;
        }

        if (troca) {
            this.ordena_por_nota();
        } else {
            console.log("A lista já está ordenada");
        }
    }

    moverElementoParaInicioPorId(id) {
        let atual = this.cabeca;

        while (atual) {
            if (atual.valor.id === id) {
                if (atual.anterior) {
                    atual.anterior.proximo = atual.proximo;
                } else {
                    this.cabeca = atual.proximo;
                }

                if (atual.proximo) {
                    atual.proximo.anterior = atual.anterior;
                } else {
                    this.cauda = atual.anterior;
                }

                atual.anterior = null;
                atual.proximo = this.cabeca;
                this.cabeca.anterior = atual;
                this.cabeca = atual;

                return;
            }

            atual = atual.proximo;
        }

        throw new Error(`Elemento com ID ${id} não encontrado na lista.`);
    }

    remove_pelo_id (id) {
        this.moverElementoParaInicioPorId(id);
        const removido = this.remover_inicio();

        return removido;
    }

    busca_binaria(nota) {
        const resultados = [];
        const lista = this.retorna_tudo();
    
        this.busca_binaria_recursiva(lista, parseInt(nota), resultados);
    
        return resultados;
    }
    
    busca_binaria_recursiva(lista, nota, resultados) {
        if (lista.length === 0) {
            return;
        }
    
        const meio = Math.floor(lista.length / 2);
        const notaMeio = parseInt(lista[meio].nota);
    
        if (notaMeio === nota) {
            resultados.push(lista[meio]);
    
            this.busca_binaria_recursiva(lista.slice(0, meio), nota, resultados);
            this.busca_binaria_recursiva(lista.slice(meio + 1), nota, resultados);
        } else if (notaMeio > nota) {
            this.busca_binaria_recursiva(lista.slice(0, meio), nota, resultados);
        } else {
            this.busca_binaria_recursiva(lista.slice(meio + 1), nota, resultados);
        }
    }

    retorna_tudo () {
        const result = [];
        let atual = this.cabeca;

        while (atual) {
            result.push(atual.valor);
            atual = atual.proximo;
        }

        return result;
    }

    travessia () {
        let atual = this.cabeca;

        while (atual) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }

    recuperar_tamanho () {
        return this.tamanho;
    }
};

module.exports = {
    ListaDuplamenteEncadeada,
};
