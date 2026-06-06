(() => {
  const body = document.body;
  const header = document.getElementById("header");
  const nav = header.querySelector("nav");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (!toggle) return;

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    toggle.ariaExpanded = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");

    if (toggle.ariaExpanded === "true") {
      nav.classList.remove("blur-01");
      body.style.overflow = "hidden";
    } else {
      nav.classList.add("blur-01");
      body.style.overflow = "";
    }
  });
})();
