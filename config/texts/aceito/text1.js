// ⚠️ Modifique apenas as variáveis!

var textAceito1 = `Finalmente aceitou!! (não te dei outra escolha)💖`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textAceito1\}/g, textAceito1);
  });
});