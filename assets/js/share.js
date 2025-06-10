  function createToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("flex", "items-center", "w-full", "max-w-xs", "p-4", "mb-4", "text-gray-500", "bg-white", "rounded-lg", "shadow-sm", "dark:text-gray-400", "dark:bg-gray-800", "fixed", "top-5", "right-5", "z-50");
    toast.setAttribute("role", "alert");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("inline-flex", "items-center", "justify-center", "shrink-0", "w-8", "h-8", "text-green-500", "bg-green-100", "rounded-lg", "dark:bg-green-800", "dark:text-green-200");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "w-5 h-5");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewBox", "0 0 20 20");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z");
    svg.appendChild(path);
    iconContainer.appendChild(svg);
    toast.appendChild(iconContainer);

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("ms-3", "text-sm", "font-normal");
    messageDiv.textContent = message;
    toast.appendChild(messageDiv);

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("ms-auto", "-mx-1.5", "-my-1.5", "bg-white", "text-gray-400", "hover:text-gray-900", "rounded-lg", "focus:ring-2", "focus:ring-gray-300", "p-1.5", "hover:bg-gray-100", "inline-flex", "items-center", "justify-center", "h-8", "w-8", "dark:text-gray-500", "dark:hover:text-white", "dark:bg-gray-800", "dark:hover:bg-gray-700");
    closeButton.setAttribute("aria-label", "Close");

    const closeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    closeIcon.setAttribute("class", "w-3 h-3");
    closeIcon.setAttribute("aria-hidden", "true");
    closeIcon.setAttribute("fill", "none");
    closeIcon.setAttribute("viewBox", "0 0 14 14");

    const closePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    closePath.setAttribute("stroke", "currentColor");
    closePath.setAttribute("stroke-linecap", "round");
    closePath.setAttribute("stroke-linejoin", "round");
    closePath.setAttribute("stroke-width", "2");
    closePath.setAttribute("d", "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6");

    closeIcon.appendChild(closePath);
    closeButton.appendChild(closeIcon);
    toast.appendChild(closeButton);

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
    closeButton.addEventListener("click", () => toast.remove());
  }

  document.addEventListener("DOMContentLoaded", () => {
    const name = typeof userName !== "undefined" ? userName : "você";
  
    document.getElementById("shareButton")?.addEventListener("click", function () {
      const pageTitle = document.title;
      const pageUrl = window.location.href;
      const customMessage = `💘 ${name}, uma declaração só pra você. Abre com o coração? 💌\n\n🔗 ${pageUrl}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(customMessage)}%20${encodeURIComponent(pageTitle)}`;
      window.open(whatsappUrl, '_blank');
    });

  });