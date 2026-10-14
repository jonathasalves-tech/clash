// Gerenciamento de Abas
const buttons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.content-panel');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    buttons.forEach(btn => btn.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

// Função para Copiar o Prompt
function copiarPrompt(id) {
  const texto = document.getElementById(id).innerText;
  navigator.clipboard.writeText(texto).then(() => {
    alert('System Prompt copiado com sucesso!');
  }).catch(err => {
    console.error('Erro ao copiar: ', err);
  });
}
