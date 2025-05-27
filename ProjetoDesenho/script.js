function exibirNome(){
    let nome = document.getElementById('nomeInput').value;
    if (nome ==="cadu maverick"){
        document.getElementById('mensagem').innerHTML = "Você acertou meu nome, parabéns!";
    }else{
        document.getElementById('mensagem').innerHTML = "Você errou meu nome, tente novamente!";
    }
}

function limpar(){
    document.getElementById('nomeInput').value = "";
    document.getElementById('mensagem').innerHTML = "";
    document.getElementById('nomeInput').focus();
}