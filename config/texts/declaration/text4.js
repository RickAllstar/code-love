// ⚠️ Modifique apenas as variáveis!

var textDeclaration4 = `Geleiras vão derreter
Estrelas vão se apagar
E eu pensando em ter você
Pelo tempo que durar
Coisas vão se transformar
Para desaparecer
E eu pensando em ficar
A vida a te transcorrer
E eu pensando em passar
Pela vida com você`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textDeclaration4\}/g, textDeclaration4);
  });
});