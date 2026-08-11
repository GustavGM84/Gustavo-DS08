const prompt = require('prompt-sync')();

function escadaDireita(){
let numero = Number(prompt("Digite um número:"));

for (let i= 1;i<= numero;i++){
let vazio = " ".repeat(numero - i);
let asterisco = "*".repeat(i);

console.log(vazio + asterisco);

}
}

escadaDireita();