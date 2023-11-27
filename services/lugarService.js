const { ListaDuplamenteEncadeada } = require("../scripts/doubleLinkedList.js");
const { recuperarDados, inserirDado } = require("../auxs/processCSV.js");
const criarIdUnico = require("../auxs/createUniqueId.js");

const listaLocais = new ListaDuplamenteEncadeada();

const localCSVPath = "database/tabelas/local.csv";

const popularLista = () => {
    const dados = recuperarDados(localCSVPath);

    dados.forEach((element) => {
        listaLocais.inserir_final(element);
    });
};

const recuperarLugares = () => {
    return listaLocais.retorna_tudo();
};

const cadastraLugar = (body, file) => {
    const new_body = body;

    if (file) {
        const fotoPath = file.path;

        new_body["foto"] = fotoPath;
    };

    new_body["id"] = criarIdUnico();

    listaLocais.inserir_final(new_body);

    listaLocais.travessia();

    listaLocais.ordena_por_nota();

    const dados_para_cadastrar = listaLocais.retorna_tudo();

    inserirDado(localCSVPath, dados_para_cadastrar);

    return new_body;
};

module.exports = {
    listaLocais,
    cadastraLugar,
    recuperarLugares,
    popularLista,
};
