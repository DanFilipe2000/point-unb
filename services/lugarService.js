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

const locaisByUser = (user_id) => {
    const lugares = listaLocais.retorna_tudo();

    console.log(lugares);

    const filteredList = lugares.filter((e) => e.user_id == user_id);

    console.log(filteredList);

    return filteredList;
}

const removerLugar = (id) => {
    const removido = listaLocais.remove_pelo_id(id);

    const lugares = listaLocais.retorna_tudo();

    // Atualiza o banco de dados com os arquivos que ficaram
    inserirDado(localCSVPath, lugares);

    return removido;
};

const buscaBinaria = (nota) => {
    const locais = listaLocais.busca_binaria(nota)
    console.log(locais);
    return locais;
};

module.exports = {
    listaLocais,
    cadastraLugar,
    recuperarLugares,
    popularListaLocais,
    locaisByUser,
    removerLugar,
    buscaBinaria,
};
