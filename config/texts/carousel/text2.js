// ⚠️ Modifique apenas as variáveis!

var textCarousel2 = `Preparei isso com todo o meu coração… Aqui estão alguns dos momentos mais lindos e sinceros que vivemos juntos. Cada lembrança carrega um pedacinho do amor que sinto por você — e mesmo assim, ainda é pouco perto do que mora dentro de mim. Você é, sem dúvida, a melhor parte da minha história. 💘`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textCarousel2\}/g, textCarousel2);
  });
});
