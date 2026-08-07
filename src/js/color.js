const oceanBtn = document.getElementById("ocean-btn");
const forestBtn = document.getElementById("forest-btn");
const blossomBtn = document.getElementById("blossom-btn");
const colorPreview = document.getElementById("color-preview");

const themeChanger = (theme) => {
    colorPreview.className = "";
    colorPreview.classList.add(theme);
}

oceanBtn.addEventListener("click", () => {
    themeChanger("ocean-theme");
});
forestBtn.addEventListener("click", () => {
    themeChanger("forest-theme");
});
blossomBtn.addEventListener("click", () => {
    themeChanger("blossom-theme");
});