alert('Bem vindo ao Jogo do Numero Secreto!');
let nome = prompt('Qual é o seu nome?');
let numeroSecreto = 29;
let numeroEscolhido = 0;

// Controle de Fluxo (Estruturas de Controle)
do {
    numeroEscolhido = prompt('Escolha o numero entre 1 e 30: ');
    if (numeroSecreto == numeroEscolhido) {
        alert('Parabéns ' + nome + ' você acertou o numero secreto!' + numeroSecreto);
    } else {
        alert('Que pena, tente novamente!');
    }    
} while (numeroEscolhido != numeroSecreto);
