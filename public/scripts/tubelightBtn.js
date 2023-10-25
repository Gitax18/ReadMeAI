var darkmode = localStorage.getItem("darkmode") === "true" ? true : false;


const header = document.querySelector(".header-nav");
const main = document.querySelector(".main");
const editor = document.querySelector(".container-markdown");
const preview = document.querySelector(".container-preview");
const bulb = document.querySelector(".bulb");


// Function to set darkmode
function setDarkMode(enabled) {
    if (enabled) {
        document.body.style.background = "#101112";
        header.classList.add("header-nav-dark");
        main.classList.add("main-dark");
        editor.classList.add("editor-dark");
        preview.classList.add("preview-dark");
        bulb.style.background = "#fff9ad";
    } else {
        document.body.style.background = "white";
        header.classList.remove("header-nav-dark");
        main.classList.remove("main-dark");
        editor.classList.remove("editor-dark");
        preview.classList.remove("preview-dark");
        bulb.style.background = "unset";
    }
}

// Apply the dark mode state.
document.querySelector(".tubelight").addEventListener('click', function () {
    darkmode = !darkmode;
    localStorage.setItem("darkmode", darkmode);
    setDarkMode(darkmode);
});

setDarkMode(darkmode);