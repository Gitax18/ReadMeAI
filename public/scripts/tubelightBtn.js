var darkmode = localStorage.getItem("darkmode") === "true" ? true : false;

// Apply the dark mode state.


document.querySelector(".tubelight").addEventListener('click', function () {
    darkmode = !darkmode;
    localStorage.setItem("darkmode", darkmode);
    setDarkMode(darkmode);
});

var header = document.querySelector(".header-nav");
var main = document.querySelector(".main");
var editor = document.querySelector(".container-markdown");
var preview = document.querySelector(".container-preview");
var bulb = document.querySelector(".bulb");

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


setDarkMode(darkmode);