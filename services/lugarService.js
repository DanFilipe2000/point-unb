const { ListaDuplamenteEncadeada } = require("../scripts/doubleLinkedList.js");
const firebase = require('../firebase.js');

const lista = new ListaDuplamenteEncadeada();

const cadastraLugar = (body) => {
    lista.inserir_final(body);

    return body;
}

module.exports = {
    lista,
    cadastraLugar,
}