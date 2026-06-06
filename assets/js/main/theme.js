(() => {
  const themes = ["auto", "light", "dark"];
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const proseElems = document.querySelectorAll(".prose");
  const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");

  const isInvert = (theme) => {
    if (theme === "light") return false;
    if (theme === "dark") return true;
    return darkMedia.matches;
  };

  const invertProse = (theme) => {
    const invert = isInvert(theme);
    proseElems.forEach((el) => el.classList.toggle("prose-invert", invert));
  };

  const setTheme = (theme) => {
    themeToggle.setAttribute("theme", theme);
    html.classList.remove(...themes);
    html.classList.add(theme);
    localStorage.setItem("customTheme", theme);
    invertProse(theme);
  };

  darkMedia.addEventListener("change", (event) => {
    if (html.classList.contains("auto")) invertProse("auto");
  });

  const saved = localStorage.getItem("customTheme") || themeToggle.getAttribute("theme");
  setTheme(saved);

  themeToggle.addEventListener("click", (event) => {
    const current = themeToggle.getAttribute("theme");
    const nextIndex = (themes.indexOf(current) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  });
})();
