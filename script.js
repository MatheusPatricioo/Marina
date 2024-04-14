var respostasAnteriores = ''; // Variável global para armazenar as respostas anteriores

function perguntaRespondida(pergunta, resposta) {
    console.log("Resposta pergunta " + pergunta + ": " + resposta);
    // Armazena a resposta anterior
    respostasAnteriores += "Pergunta " + pergunta + ": " + resposta + "<br>";
}

function sim() {
    // Esconde os botões
    document.getElementById('btnSim').style.display = 'none';
    document.getElementById('btnNao').style.display = 'none';
    // Cria um coração gigante com a mensagem de texto e respostas anteriores
    var coracaoContainer = document.getElementById('coracaoContainer');
    var coracao = document.createElement('div');
    coracao.innerHTML = '&hearts; <span class="mensagem">Você tem um encontro marcado<br>' + respostasAnteriores + '</span>';
    coracao.className = 'coracao-gigante';
    coracaoContainer.appendChild(coracao);
    // Redireciona após alguns segundos
    setTimeout(function() {
        window.location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
    }, 5000); // 5 segundos
}

function desvia(btn) {
    // Move o botão para uma nova posição aleatória na tela
    var newPositionX = Math.random() * (window.innerWidth - 100);
    var newPositionY = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'absolute';
    btn.style.top = newPositionY + 'px';
    btn.style.left = newPositionX + 'px';
    // Efeito de "estouro"
    btn.classList.add('estouro');
    setTimeout(function() {
        btn.classList.remove('estouro');
    }, 300);
}

document.getElementById('btnNao').addEventListener('click', function() {
    perguntaRespondida(1, 'Não');
    desvia(this);
});

document.getElementById('btnSim').addEventListener('click', function() {
    perguntaRespondida(1, 'Sim');
    sim();
});
