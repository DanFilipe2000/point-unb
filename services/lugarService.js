const { ListaDuplamenteEncadeada } = require("../scripts/doubleLinkedList.js");
const fs = require('fs');
const path = require('path');

const userTable = "../database/tabelas/user.csv";

const lista = new ListaDuplamenteEncadeada();

const cadastraLugar = (body, file) => {
    const new_body = body;

    if (file) {
        const path = path.join(__dirname, '..', 'public/images', file.filename);

        new_body['foto'] = path;
    }

    lista.inserir_final(new_body);

    lista.travessia();

    return new_body;
};

module.exports = {
    lista,
    cadastraLugar,
};
