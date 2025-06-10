

const textFY3 = `💖Lembro de cada momento, como nas vezes que fomos ao parque, no shopping, cinema, e quando você veio pela primeira vez na minha casa e eu na sua...
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY3
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY3}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY3\}/g, formattedText);
    }
  });
});
