// ⚠️ Modifique apenas as variáveis!

var textTempo2 = `Contando cada instante ao seu lado desde o nosso dia especial. `;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textTempo2\}/g, textTempo2);
  });
});