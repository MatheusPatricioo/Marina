var respostasAnteriores = ''; // Variável global para armazenar as respostas anteriores

function pergunta1Respondida(resposta) {
    console.log("Resposta pergunta 1: " + resposta);
    // Armazena a resposta anterior
    respostasAnteriores += "Pergunta 1: " + resposta + "<br>";
    // Oculta a pergunta atual e mostra a próxima
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
}

function pergunta2Respondida(resposta) {
    console.log("Resposta pergunta 2: " + resposta);
    // Armazena a resposta anterior
    respostasAnteriores += "Pergunta 2: " + resposta + "<br>";
    // Oculta a pergunta atual e mostra a próxima
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('perguntaPrincipal').style.display = 'block';
}

function sim() {
    // Esconde os botões
    document.getElementById('btnSim').style.display = 'none';
    document.getElementById('btnNao').style.display = 'none';
    // Cria um coração gigante com a mensagem de texto e respostas anteriores
    var coracaoContainer = document.getElementById('coracaoContainer');
    var coracao = document.createElement('div');
    
    // Obtém a data atual para incluir na mensagem
    var data = new Date();
    var dataFormatada = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    
    // Obtém as respostas anteriores
    var respostas = respostasAnteriores.split("<br>");
    
    // Cria a mensagem final com as respostas
    var mensagemFinal = "Agora você tem um encontro marcado para o dia " + dataFormatada + ", vamos comer " + respostas[0].split(":")[1].trim() + " e vamos passar no " + respostas[1].split(":")[1].trim();
    
    coracao.innerHTML = '&hearts; <span class="mensagem">' + mensagemFinal + '</span>';
    coracao.className = 'coracao-gigante';
    coracaoContainer.appendChild(coracao);
    // Redireciona após alguns segundos
    setTimeout(function() {
        window.location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
    }, 5000); // 5 segundos
}


function desvia(btn) {
    // Move o botão para uma nova posição aleatória na telaa.
    var newPositionX = Math.random() * (window.innerWidth - 100);
    var newPositionY = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'absolute';
    btn.style.top = newPositionY + 'px';
    btn.style.left = newPositionX + 'px';
}

document.getElementById('btnNao').addEventListener('click', function() {
    // Mostra a próxima pergunta
    perguntaPrincipalRespondida('Não');
});

document.getElementById('btnSim').addEventListener('click', function() {
    // Mostra a próxima pergunta
    perguntaPrincipalRespondida('Sim');
});
