const prompt = require("prompt-sync")();

function kkk(){
let quant = Number(prompt("Digite um número: "));

for (linha = 1;linha <= quant; linha++) {
    let resultado = "";
for (coluna = 1;coluna <= linha; coluna++){
    resultado = resultado + coluna;
 }
 console.log(resultado)
 }

}

kkk();