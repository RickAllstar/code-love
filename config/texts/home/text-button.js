// ⚠️ Modifique apenas as variáveis!

var textButton = `Para você`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textButton\}/g, textButton);
  });
});
