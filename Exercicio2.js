const prompt = require (`prompt-sync`)();

let repete = "";
function trianguloNumeros(){
let numero = Number(prompt("Digite um número inteiro positivo:"));
for (let i= 1;i<= numero;i++){
 repete = "";
 for (a = 1;a <= i;a++){
 repete = repete + i;
 } 
    console.log(repete)
}
}
trianguloNumeros();