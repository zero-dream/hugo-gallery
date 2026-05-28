/* Copyright (C) 2000 ZeroDream */

(function () {
  const body = document.body;
  const header = document.getElementById("header");
  const nav = header.querySelector("nav");
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", function (event) {
    if (toggle.ariaExpanded === "true") {
      nav.classList.remove("header-blur");
      body.style.overflow = "hidden";
    } else {
      nav.classList.add("header-blur");
      body.style.overflow = "";
    }
  });
})();
