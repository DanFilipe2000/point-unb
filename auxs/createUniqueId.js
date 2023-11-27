function criarIdUnico() {
    const timestamp = new Date().getTime().toString(16); // Obtém o timestamp em hexadecimal
    const aleatorio = Math.random().toString(16).substring(2); // Gera um número aleatório em hexadecimal

    return `${timestamp}-${aleatorio}`;
}

module.exports = criarIdUnico;