alert('Bem vindo ao Jogo do Numero Secreto!');
let nome = prompt('Qual é o seu nome?');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * 50 + 1); // base 10 (decimal)
let numeroEscolhido = 0;
let tentativas = 0;
let palavraTentativa;

// Controle de Fluxo (Estruturas de Controle)
do {
    numeroEscolhido = prompt(`Escolha o numero entre 1 e ${numeroMaximo}: `);
    tentativas++;
    palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
    if (numeroSecreto == numeroEscolhido) {
        alert('Parabéns ' + nome + ', você acertou o numero secreto ' + numeroSecreto + ' em ' + tentativas + palavraTentativa);
    }
    else if (numeroEscolhido > numeroSecreto) {
            alert('O numero secreto é menor que o escolhido ' + numeroEscolhido);
        } else {
            alert('O numero secreto é maior que o escolhido ' + numeroEscolhido);
        } 
}
while (numeroEscolhido != numeroSecreto);
