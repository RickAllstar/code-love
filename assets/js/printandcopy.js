document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("printButton").addEventListener("click", () => window.print());

  document.getElementById("copyUrlButton").addEventListener("click", function () {
    const currentUrl = window.location.href;
    const textarea = document.createElement("textarea");
    textarea.value = currentUrl;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    createToast("URL copiada com sucesso!");
  });
});
