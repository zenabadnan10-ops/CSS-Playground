const fontFamily = document.getElementById("font-options");
const fontSize = document.getElementById("size-options");
const fontWeight = document.getElementById("weight-options");
const letterSpacing = document.getElementById("spacing-options");

const heading = document.getElementById("typo-preview-heading");
const desc = document.getElementById("typo-preview-desc");


const changeFont = (property, select) => {

    const value = select.value;

    heading.style[property] = value;
    desc.style[property] = value;

}

fontFamily.addEventListener("change", () => {
    changeFont("fontFamily", fontFamily);
});

fontSize.addEventListener("change", () => {
    changeFont("fontSize", fontSize);
});

fontWeight.addEventListener("change", () => {
    changeFont("fontWeight", fontWeight);
});

letterSpacing.addEventListener("change", () => {
    changeFont("letterSpacing", letterSpacing);
});