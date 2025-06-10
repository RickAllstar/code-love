const textMoments = `
Preparei isso com todo o meu coração...

Aqui estão alguns dos momentos mais lindos e sinceros que vivemos juntos.
Cada sorriso seu, cada abraço apertado, cada olhar que trocamos — tudo isso se tornou parte da minha essência.
São lembranças que aquecem meu peito mesmo nos dias mais frios.

Lembro da primeira vez que te vi sorrir de verdade pra mim… daquele dia em que tudo parecia se alinhar, como se o universo tivesse nos colocado exatamente onde devíamos estar.
As conversas longas, as risadas bobas, os silêncios confortáveis.
Cada instante ao seu lado foi como uma pequena eternidade de paz.

Se eu pudesse voltar no tempo, reviveria tudo mil vezes.
Mas a verdade é que, com você, o presente já é o suficiente — porque você transforma o agora no melhor lugar do mundo.

Você é, sem dúvida, a melhor parte da minha história.
E se tudo isso aqui for uma forma de te lembrar disso, então valeu cada segundo.
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textMoments
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textMoments}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textMoments\}/g, formattedText);
    }
  });
});
