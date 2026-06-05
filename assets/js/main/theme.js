(() => {
  const themes = ["auto", "light", "dark"];
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  const setTheme = (theme) => {
    themeToggle.setAttribute("theme", theme);
    html.classList.remove(...themes);
    html.classList.add(theme);
    localStorage.setItem("customTheme", theme);
  };

  const saved = localStorage.getItem("customTheme");
  saved && setTheme(saved);

  themeToggle.addEventListener("click", (event) => {
    let current = "auto";
    themes.forEach((theme) => {
      if (html.classList.contains(theme)) current = theme;
    });
    const currentIndex = themes.indexOf(current);
    const nextIndex = (currentIndex + 1) % themes.length;
    const next = themes[nextIndex];
    setTheme(next);
  });
})();
