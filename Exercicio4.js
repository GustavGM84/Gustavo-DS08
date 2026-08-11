const prompt = require('prompt-sync')();

function desenharMoldura(){
  let altura = Number(prompt("Digite a altura da moldura:"));
  let largura = Number(prompt("Digite a largura da moldura:"));
  
   for (let i = 0; i < altura; i++) {
    
    if (i === 0 || i === altura - 1) {
      console.log("*".repeat(largura));

    }else {
      let vazio = " ".repeat(largura - 2);
      console.log("*" + vazio + "*");
    }
  }
}

desenharMoldura();