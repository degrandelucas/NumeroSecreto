let numeroMaximo = 100;
let numeroSecreto = gerarNumeroSecreto(numeroMaximo);
let numeroEscolhido = 0;
let tentativas = 0;
let palavraTentativa;

function gerarNumeroSecreto(numeroMaximo){
    return parseInt(Math.random() * numeroMaximo + 1);
}

function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

exibirTextoNaTela('tituloPagina', 'Jogo do Número Secreto');
exibirTextoNaTela('descricao', 'Adivinhe o número secreto entre 1 e ' + numeroMaximo);


// Controle de Fluxo (Estruturas de Controle)
function verificarChute(){
    numeroEscolhido = parseInt(document.getElementById('campoNumeroChute').value);
    tentativas++;
    palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
    if (numeroSecreto == numeroEscolhido) {
        exibirTextoNaTela('respostaAposChute','Parabéns, você acertou o numero secreto ' + numeroSecreto + ' em ' + tentativas + palavraTentativa);
        novoJogo();
    }
    else if (numeroEscolhido > numeroSecreto) {
        exibirTextoNaTela('respostaAposChute','O numero secreto é menor que o escolhido ' + numeroEscolhido);
        } else {
            exibirTextoNaTela('respostaAposChute','O numero secreto é maior que o escolhido ' + numeroEscolhido);
        } 
}

function novoJogo(){
    exibirTextoNaTela('respostaAposChute','');
    numeroSecreto = gerarNumeroSecreto(numeroMaximo);    tentativas = 0;
}
