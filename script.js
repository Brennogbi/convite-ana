function abrirConvite() {
  const tela = document.getElementById('telaInicial');
  const convite = document.getElementById('convite');
  const audio = document.getElementById('musicaFundo');

  tela.style.display = 'none';
  convite.classList.add('ativo');

  // Inicia a música
  audio.volume = 0.5;
  audio.play().catch((e) => {
    console.log('Autoplay bloqueado. Clique para ativar som.');
  });
}
