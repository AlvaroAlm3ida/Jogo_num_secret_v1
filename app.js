alert('Boas Vindas ao jogo do número secreto'); //cria um alerta na prompt
let numeroMaximo = 1000;
let  numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('numeroSecreto');
let chute ;
let Tentativas = 1 ;

//Enquanto chute não for igual ao numero secreto 
while (chute != numeroSecreto){                      // != Significa diferente
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto//
    if (chute == numeroSecreto) {
       break; //não continua caso for acertado de primeira
    }
    else{
        if(chute > numeroSecreto){                                             // > Maior que  que < Menor  que
            alert(`o número secreto é menor que ${chute}`);
        } else{
            alert(`o número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1; mesma sintax do modo abaixo, porém o modo abaixo é mais prático
        Tentativas++;
    }
}

//OPERADORES TERNARIOS 
let palavreTentativa = Tentativas > 1 ? 'Tentativas' : 'Tentativa';  // Substituição do código abaixo 
alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${Tentativas} ${palavreTentativa}.`);  // Exemplo de template strings//
//if(Tentativas>1) {
    //alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${Tentativas} tentativas`);  // Exemplo de template strings//
//}else{
    //alert(`isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${Tentativas} tentativa.`);  // Exemplo de template strings//
//}
 

