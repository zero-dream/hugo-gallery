(() => {
  const body = document.body;
  const header = document.getElementById("header");
  const nav = header.querySelector("nav");
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById("menu");
    toggle.ariaExpanded = target.classList.contains("hidden");
    target.classList.toggle("hidden");
    if (toggle.ariaExpanded === "true") {
      nav.classList.remove("header-blur");
      body.style.overflow = "hidden";
    } else {
      nav.classList.add("header-blur");
      body.style.overflow = "";
    }
  });
})();
