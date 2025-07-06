(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn?.querySelector("span");
  const storedTheme = localStorage.getItem("theme");

  function updateIcon(theme) {
    if (!icon) return;
    icon.textContent = theme === "dark" ? "dark_mode" : "light_mode";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
    updateIcon(theme);
  }

  window.toggleTheme = function () {
    const isDark = root.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  };

  // Initial load
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme || (systemPrefersDark ? "dark" : "light");
  applyTheme(theme);
})();
