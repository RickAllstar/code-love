// ⚠️ Modifique apenas as variáveis!

var textDeclarationButton = `Ler mais`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textDeclarationButton\}/g, textDeclarationButton);
  });
});