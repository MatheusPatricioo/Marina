function pergunta1Respondida(resposta) {
    console.log("Resposta pergunta 1: " + resposta);
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
}

function pergunta2Respondida(resposta) {
    console.log("Resposta pergunta 2: " + resposta);
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('perguntaPrincipal').style.display = 'block';
}

function sim() {
    // Esconde os botões
    document.getElementById('btnSim').style.display = 'none';
    document.getElementById('btnNao').style.display = 'none';
    // Exibe corações ao redor da resposta
    var resposta = document.getElementById('perguntaPrincipal').querySelector('h2').innerText;
    var coracaoContainer = document.getElementById('coracaoContainer');
    var coracao = document.createElement('span');
    coracao.innerHTML = '&hearts;';
    coracao.className = 'coracao';
    coracao.style.position = 'absolute';
    coracao.style.color = '#ff4646'; /* Coração vermelho */
    coracao.style.fontSize = '48px';
    coracao.style.left = 'calc(50% - 24px)';
    coracao.style.top = 'calc(50% - 24px)';
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

document.getElementById('btnNao').addEventListener('mouseover', function() {
    desvia(this);
});
