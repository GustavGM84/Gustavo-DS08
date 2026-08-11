const prompt = require('prompt-sync')();

let contador = "";

function sequenciaLetras() {
  let letra = prompt("Digite uma letra: ").toLowerCase();
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alfabeto.length; i++) {
    let letraDigitada = alfabeto[i];
    contador += letraDigitada + " ";
    console.log(contador);

    
    if ( letraDigitada === letra) {
      break; 
    }
  }
}

sequenciaLetras();