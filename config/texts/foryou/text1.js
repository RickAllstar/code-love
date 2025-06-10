const textFY1 = `Agora, por favor, leia essas palavras com o coração aberto, porque cada linha que escrevi aqui carrega uma parte de mim.

Talvez eu não seja a melhor pessoa com palavras, mas dentro de mim existe um mundo inteiro de sentimentos que só fazem sentido quando penso em você. Tudo aqui foi pensado com carinho, cuidado e verdade. Não é só um texto — é um pedaço do meu coração envolto em letras, uma tentativa doce e imperfeita de transformar o que sinto em algo que você possa ler... e sentir também.

Então, por favor, leia devagar. Deixe cada palavra tocar você com a mesma delicadeza com que saiu de mim. Você é muito mais especial do que talvez consiga imaginar. Esse é o meu jeito tímido — mas real — de dizer que gosto de você... profundamente.
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY1
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY1}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY1\}/g, formattedText);
    }
  });
});
