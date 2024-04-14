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
    // Exibe coração gigante
    var coracaoContainer = document.getElementById('coracaoContainer');
    var coracaoGigante = document.createElement('span');
    coracaoGigante.innerHTML = '&hearts;';
    coracaoGigante.className = 'coracaoGigante';
    coracaoContainer.appendChild(coracaoGigante);
    // Redireciona após alguns segundos
    setTimeout(function() {
        window.location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
    }, 5000); // 5 segundos
}

function desvia(btn) {
    // Move o botão para uma nova posição aleatória
    var newPositionX = Math.random() * (window.innerWidth - 100);
    var newPositionY = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'absolute';
    btn.style.top = newPositionY + 'px';
    btn.style.left = newPositionX + 'px';
}
