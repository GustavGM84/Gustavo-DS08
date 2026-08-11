const prompt = require('prompt-sync')();

function piramideCompleta() {
  let numero = Number(prompt("Digite o número de linhas da pirâmide:"));

  for (let i = 1; i <= numero; i++) {
    let vazio = " ".repeat(numero - i);
    let asterisco = "*".repeat(2 * i - 1);

    console.log(vazio + asterisco);
  }
}

piramideCompleta();