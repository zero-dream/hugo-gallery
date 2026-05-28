(function () {
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById("menu");
    toggle.ariaExpanded = target.classList.contains("hidden");
    target.classList.toggle("hidden");
  });
})();
