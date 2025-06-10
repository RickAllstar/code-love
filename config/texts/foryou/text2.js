

const textFY2 = `Já faz algum tempo que venho sentindo algo diferente... Algo que não cabe em frases prontas ou explicações lógicas.

Quando penso em você, meu coração desacelera. O mundo parece menos barulhento. A vida, mais bonita. É como se você tivesse chegado de mansinho e, sem perceber, fosse ocupando um espaço gigante dentro de mim.

Seu jeito, seu sorriso, sua presença… tudo em você me traz paz. Você me faz sorrir nos dias bons e ser forte nos dias ruins. Você me inspira. E, sem pedir nada em troca, me faz querer ser uma versão melhor de mim.

Talvez eu não saiba demonstrar tudo do jeito mais certo… Mas eu sei sentir. E o que eu sinto por você é verdadeiro. Tenho vontade de estar por perto, de dividir silêncios e risadas, de escrever uma história onde cada capítulo seja nosso.

Quero cuidar. Quero somar. Quero caminhar junto. Não por precisar. Mas por escolher.

E é por isso que hoje, com o coração na mão e o sorriso nos olhos, eu te digo:

1 - Eu escolho você.
2 - Escolho tentar, acertar, errar, aprender — contigo.
3 - Eu escolho não deixar passar esse sentimento bonito que nasceu entre nós.
4 - Escolho te chamar de "meu amor", com todo orgulho do mundo.
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY2
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY2}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY2\}/g, formattedText);
    }
  });
});
