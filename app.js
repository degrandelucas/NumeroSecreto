let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * 50 + 1); // base 10 (decimal)
let numeroEscolhido = 0;
let tentativas = 0;
let palavraTentativa;
let titulo = document.getElementById('tituloPagina');
titulo.innerHTML = 'Jogo do Número Secreto';

// Controle de Fluxo (Estruturas de Controle)

// Controle de Fluxo (Estruturas de Controle)

// do {
//     numeroEscolhido = console.log(`Escolha o numero entre 1 e ${numeroMaximo}: `);
//     tentativas++;
//     palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
//     if (numeroSecreto == numeroEscolhido) {
//         console.log('Parabéns, você acertou o numero secreto ' + numeroSecreto + ' em ' + tentativas + palavraTentativa);
//     }
//     else if (numeroEscolhido > numeroSecreto) {
//         console.log('O numero secreto é menor que o escolhido ' + numeroEscolhido);
//         } else {
//             console.log('O numero secreto é maior que o escolhido ' + numeroEscolhido);
//         } 
// }
// while (numeroEscolhido != numeroSecreto);
