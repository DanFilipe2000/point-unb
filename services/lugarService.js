const { ListaDuplamenteEncadeada } = require("../scripts/doubleLinkedList.js");
const { recuperarDados, inserirDado } = require("../auxs/processCSV.js");
const criarIdUnico = require("../auxs/createUniqueId.js");

const listaLocais = new ListaDuplamenteEncadeada();

const localCSVPath = "database/tabelas/local.csv";

const popularListaLocais = () => {
    const dados = recuperarDados(localCSVPath);

    dados.forEach((element) => {
        listaLocais.inserir_final(element);
    });
};

const recuperarLugares = () => {
    return listaLocais.retorna_tudo();
};

const cadastraLugar = (body, file, user) => {
    const new_body = body;

    if (file) {
        const fotoPath = file.path;

        new_body["foto"] = fotoPath;
    };

    new_body["id"] = criarIdUnico();
    new_body["user_id"] = user.id;

    listaLocais.inserir_final(new_body);

    const dados_para_cadastrar = listaLocais.retorna_tudo();

    inserirDado(localCSVPath, dados_para_cadastrar);

    return new_body;
};

const removerLugar = (lugar) => {
    
};

module.exports = {
    listaLocais,
    cadastraLugar,
    recuperarLugares,
    popularListaLocais,
};
