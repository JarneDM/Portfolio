document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".dark-mode__toggle");
  const htmlElement = document.documentElement;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // If no preference saved, check system preference
    htmlElement.setAttribute("data-theme", "dark");
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", function () {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    const isPressed = themeToggle.getAttribute("aria-pressed") === "true";

    themeToggle.setAttribute("aria-pressed", String(!isPressed));

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
