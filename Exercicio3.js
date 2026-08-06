const prompt = require("prompt-sync")();

function relogioDigital(){
let minuto = 00;
let hora = 00;

for (i = 1;i <= 1440 ;i++){
    minuto += 1;
    if (minuto === 60){
        minuto = 0
        hora += 1
        
    }

    console.log(`${hora}:${minuto}`)
}

}

relogioDigital();