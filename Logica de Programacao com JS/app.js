alert('Boas Vindas ao jogo do numero secreto !');
let numeroMaximo = 5000
let numeroSercreto = parseInt(Math.random()* numeroMaximo +1);
console.log(numeroSercreto);
let chute;
let tentativas = 1;

while(chute != numeroSercreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}!`);
   
    if (chute == numeroSercreto){
        break;
    }else {
        if(chute > numeroSercreto){
            alert(` O numero secreto e menor que ${chute}`);

        } else{
            alert(` O numero secreto e maior que ${chute}`);
        
        }
        tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai, voce acertou o numero secreto ${numeroSercreto} com ${tentativas} ${palavraTentativa}.`);

//if(tentativas > 1){
//alert(`Isso ai, voce acertou o numero secreto ${numeroSercreto} com ${tentativas} tentativas.`);
//}
//else{
//    alert(`Isso ai, voce acertou o numero secreto ${numeroSercreto} com ${tentativas} tentativa.`);

//}