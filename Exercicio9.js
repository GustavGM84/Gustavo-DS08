const prompt = require(`prompt-sync`)();
function somaAcumulada() {
    let numero = Number(prompt("Digite um número: "));
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        soma = soma + i
        let acumulado = "";
        
        for (let a = 1; a <= i; a ++) { 
            acumulado += a + (a < i ? " + " : "");
        }

        console.log(acumulado + " = " + soma);
    }
}

somaAcumulada();