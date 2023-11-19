const { ListaDuplamenteEncadeada } = require("../lista_duplamente_encadeada/doubleLinkedList.js");

const lista = new ListaDuplamenteEncadeada();

const adicionar_local = (dados) => {
    lista.inserir_inicio(dados);
    lista.travessia();
};

module.exports = {
    adicionar_local,
    lista,
}