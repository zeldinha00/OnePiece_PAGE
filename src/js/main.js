const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {

    desselecionarBotao();
    desselecionarPersonagem();

    // Adicionar a classe 'selecionado' ao botão clicado
    botao.classList.add('selecionado');
    // adicionar a classe 'selecionado' ao personagem selecionado
    personagens[indice].classList.add('selecionado');
  });
});

// Remover a classe 'selecionado' dos demais personagens
function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove('selecionado');
}
// Remover a classe 'selecionado' dos demais botões
function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove('selecionado');
}

