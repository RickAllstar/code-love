// ⚠️ Modifique apenas as variáveis!

var textHome2 = `Eu sempre desejei encontrar alguém que me fizesse sentir paz no meio do caos. E então... você chegou. É incrível como tudo muda quando você está por perto. O sorriso vem sem esforço, o coração bate mais forte — e eu simplesmente me sinto em casa. Talvez eu não saiba expressar tudo com palavras perfeitas, mas o que eu sinto por você é sincero, é leve... é real.`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textHome2\}/g, textHome2);
  });
});
