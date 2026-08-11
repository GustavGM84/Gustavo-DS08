const prompt = require('prompt-sync')();

function desenharQuadrado() {
    let tamanho = Number(prompt("Digite o tamanho do quadrado: "));
    let caractere = prompt("Digite o caractere para desenhar o quadrado: ");

    for (let i = 0; i < tamanho; i++) {
        let linha = '';

        for (let a= 0; a < tamanho; a++) {
            linha += caractere;
        }

        console.log(linha);
    }
     
}

desenharQuadrado();