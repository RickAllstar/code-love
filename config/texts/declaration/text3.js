// ⚠️ Modifique apenas as variáveis!

var textDeclaration3 = `Leia isso com carinho...`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textDeclaration3\}/g, textDeclaration3);
  });
});