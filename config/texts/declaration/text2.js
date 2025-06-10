// ⚠️ Modifique apenas as variáveis!

var textDeclaration2 = `Desde que você entrou na minha vida, tudo ganhou cor. Meu sorriso ficou mais leve, meu olhar mais feliz... e o meu coração? Ele aprendeu a bater por você. Você é a paz no meu caos, o brilho nos meus dias — e tudo que eu quero é estar ao seu lado.`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textDeclaration2\}/g, textDeclaration2);
  });
});