// ⚠️ Este script é responsável por carregar todos os arquivos, não é necessário alterá-los, a menos que haja intenção de otimizá-los ou aprimorá-los.


const scriptsToLoad = [
  "/config/texts/home/text1.js",
  "/config/texts/home/text2.js",
  "/config/texts/home/text-button.js",
  "/config/texts/carousel/text1.js",
  "/config/texts/carousel/text2.js",
  "/config/texts/carousel/text-button.js",
  "/config/texts/declaration/text1.js",
  "/config/texts/declaration/text2.js",
  "/config/texts/declaration/text3.js",
  "/config/texts/declaration/text4.js",
  "/config/texts/declaration/text-button.js",
  "/config/texts/tempojuntos/text1.js",
  "/config/texts/tempojuntos/text2.js"
];

document.documentElement.style.visibility = "hidden";

let loadedScripts = 0;

function checkAllLoaded() {
  loadedScripts++;
  if (loadedScripts === scriptsToLoad.length) {
    document.documentElement.style.visibility = "visible";
  }
}

function handleError(src) {
  console.error(`Erro ao carregar o script: ${src}`);
  alert(`Erro ao carregar parte do site: ${src}`);
}

scriptsToLoad.forEach(src => {
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;

  script.onload = checkAllLoaded;
  script.onerror = () => handleError(src);

  document.head.appendChild(script);
});
