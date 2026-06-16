const bodyEl = document.body;
const headerEl = document.getElementById("header");
const navEl = headerEl.querySelector("nav");
const toggleEl = document.getElementById("menu-toggle");
const menuEl = document.getElementById("menu");

if (toggleEl) {
  toggleEl.addEventListener("click", (event) => {
    event.preventDefault();
    toggleEl.ariaExpanded = menuEl.classList.contains("hidden");
    menuEl.classList.toggle("hidden");

    if (toggleEl.ariaExpanded === "true") {
      navEl.classList.remove("blur-01");
      bodyEl.style.overflow = "hidden";
    } else {
      navEl.classList.add("blur-01");
      bodyEl.style.overflow = "";
    }
  });
}

export {};
