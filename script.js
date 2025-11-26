const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const storageKey = "stl-site-theme";

function setTheme(mode) {
    root.classList.toggle("light", mode === "light");
    localStorage.setItem(storageKey, mode);
}

function initTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
        setTheme(saved);
        return;
    }
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
}

toggle?.addEventListener("click", () => {
    const isLight = root.classList.contains("light");
    setTheme(isLight ? "dark" : "light");
});

initTheme();

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
