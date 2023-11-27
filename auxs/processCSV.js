const fs = require("fs");

const recuperarDados = (path) => {
    const dados = [];
    const fileBuffer = fs.readFileSync(path, "utf-8").split("\n");

    fileBuffer.forEach((element) => {
        if (element !== '') {
            dados.push(JSON.parse(element));
        }
    });

    return dados;
};

const inserirDado = (path, dados) => {
    let contentString = '';

    dados.forEach((element) => {
        contentString = contentString + `${JSON.stringify(element)}\n`
    });

    fs.writeFileSync(path, contentString);
};

const removerDado = (path, dado) => {
    const dados = recuperarDados(path);
};

module.exports = {
    inserirDado,
    recuperarDados,
    removerDado,
};
