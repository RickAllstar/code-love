document.querySelectorAll(".copyIcon").forEach(function(icon, index) {
  icon.addEventListener("click", function() {
    var input = document.querySelectorAll(".urlcopy")[index];
    var message = document.querySelectorAll(".copyMessage")[index];

    var tempInput = document.createElement("input");
    tempInput.value = input.value;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    message.style.display = "inline";
    setTimeout(function() {
      message.style.display = "none";
    }, 2000); 
  });
});