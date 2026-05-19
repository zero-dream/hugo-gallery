/* Copyright (C) 2000 ZeroDream */

(function () {
  const body = document.body;
  const header = document.getElementById("header");
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", function (event) {
    if (toggle.ariaExpanded === "true") {
      header.classList.remove("header-blur");
      body.style.overflow = "hidden";
    } else {
      header.classList.add("header-blur");
      body.style.overflow = "";
    }
  });
})();
