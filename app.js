alert('Bem vindo ao Jogo do Numero Secreto!');
let numeroSecreto = 29;
let numeroEscolhido = prompt('Escolha o numero entre 1 e 30: ');

if (numeroSecreto == numeroEscolhido) {
    alert('Parabéns, você acertou!');
} else {
    alert('Que pena, tente novamente!');
}