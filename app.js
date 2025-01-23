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
    if ('speechSynthesis' in window) {
        let discurso = new SpeechSynthesisUtterance(texto);
        discurso.lang = 'pt-BR'; 
        discurso.rate = 1.5; 
        window.speechSynthesis.speak(discurso); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirTextoTelaInicial() {
    exibirTextoNaTela('tituloPagina', 'Jogo do Número Secreto');
    exibirTextoNaTela('descricao', 'Adivinhe o número secreto entre 1 e ' + numeroMaximo);
}

exibirTextoTelaInicial();

// Controle de Fluxo (Estruturas de Controle)
function verificarChute(){
    numeroEscolhido = parseInt(document.getElementById('campoNumeroChute').value);
    tentativas++;
    palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
    if (numeroSecreto == numeroEscolhido) {
        exibirTextoNaTela('tituloPagina','Acertou!!!');
        exibirTextoNaTela('descricao','Parabéns, você acertou o numero secreto ' + numeroSecreto + ' em ' + tentativas + palavraTentativa);
    }
    else if (numeroEscolhido > numeroSecreto) {
        exibirTextoNaTela('descricao','O numero secreto é menor que ' + numeroEscolhido);
        document.getElementById('campoNumeroChute').value = '';
        } else {
            exibirTextoNaTela('descricao','O numero secreto é maior que ' + numeroEscolhido);
            document.getElementById('campoNumeroChute').value = '';
        } 
}

function novoJogo(){
    numeroSecreto = gerarNumeroSecreto(numeroMaximo);    tentativas = 0;
    exibirTextoTelaInicial();
    document.getElementById('campoNumeroChute').value = '';
}
    