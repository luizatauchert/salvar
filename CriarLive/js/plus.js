function toggleMiniPagina() {
    const menu = document.getElementById("miniPagina");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  window.addEventListener("click", function (e) {
    const menu = document.getElementById("miniPagina");
    const button = document.querySelector(".add-button");
  
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.style.display = "none";
    }
  });