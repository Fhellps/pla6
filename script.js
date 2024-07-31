document.getElementById('video-overlay').addEventListener('click', function() {
    // Redireciona para o anúncio
    window.open('https://ads.example.com', '_blank');
    // Remove o overlay após o clique
    this.style.display = 'none';
    // Reproduz o vídeo após 2 segundos (tempo estimado para o usuário voltar)
    setTimeout(function() {
        var iframe = document.getElementById('video');
        var player = new Vimeo.Player(iframe);
        player.play();
    }, 2000);
});

// Código do anúncio do Google AdSense
(adsbygoogle = window.adsbygoogle || []).push({});
