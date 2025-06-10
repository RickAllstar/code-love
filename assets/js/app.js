document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".no");
  let position = 0;
  let isAnimating = false;

  function moveButton() {
    if (!isAnimating) {
      isAnimating = true;
      position = position === 0 ? -120 : 0; 
      btn.style.transform = `translateY(${position}px)`;
      btn.style.transition = "all 0.2s ease";

      setTimeout(() => {
        isAnimating = false;
      }, 200);
    }
  }

  btn.addEventListener("click", moveButton);
  btn.addEventListener("mouseover", moveButton);
});