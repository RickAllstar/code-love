// ⚠️ Modifique apenas as variáveis!

var textAceito2 = `Você aceitou... e isso já é tudo pra mim. Vamos viver o amor que a gente merece, um dia de cada vez, sempre juntos`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textAceito2\}/g, textAceito2);
  });
});