const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite o numero:"));

function verificarTriangular(numero) {
  if (numero < 0) {
    console.log("Este número não é triangular");
    return;
  }

  let i = 1;
  while (i * (i + 1) < numero * 2) {
    i++;
 
  }
  
  if ((numero * 2) / i === i + 1) {
    console.log("Este número é triangular");

  }else {
    console.log("Este número não é triangular");
  }

}

verificarTriangular(numeroDigitado);