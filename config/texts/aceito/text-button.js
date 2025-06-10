// ⚠️ Modifique apenas as variáveis!

var textAceitoButton = `Te amooo`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textAceitoButton\}/g, textAceitoButton);
  });
});