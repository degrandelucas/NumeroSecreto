alert('Bem vindo ao Jogo do Numero Secreto!');
let nome = prompt('Qual é o seu nome?');
let numeroSecreto = 29;
let numeroEscolhido = 0;

// Controle de Fluxo (Estruturas de Controle)
do {
    numeroEscolhido = prompt('Escolha o numero entre 1 e 30: ');
    if (numeroSecreto == numeroEscolhido) {
        alert('Parabéns ' + nome + ' você acertou o numero secreto ' + numeroSecreto);
    } else
        if (numeroEscolhido > numeroSecreto) {
            alert('O numero secreto é menor que o escolhido ' + numeroEscolhido);
        } else {
            alert('O numero secreto é maior que o escolhido ' + numeroEscolhido);
        } 
} while (numeroEscolhido != numeroSecreto);
