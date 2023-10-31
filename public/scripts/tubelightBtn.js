var darkmode = localStorage.getItem("darkmode") === "true" ? true : false;


const header = document.querySelector(".header-nav");
const main = document.querySelector(".main");

const editor = document.querySelector(".container-markdown");
const editor_header = document.querySelector(".editor-header")

const preview = document.querySelector(".container-preview");
const preview_header = document.querySelector(".preview-header");

const bulb = document.querySelector(".bulb");

const editor_btns = document.querySelectorAll(".ribbon-button");
const editor_selcetion = document.querySelector("#add-heading");
const preview_heading = document.querySelector(".preview-heading");

// console.log(editor_btns)
// Function to set darkmode
function setDarkMode(enabled) {
    if (enabled) {
        document.body.style.background = "#101112";
        header.classList.add("header-nav-dark");
        main.classList.add("main-dark");
        // editor and editor header dark mode
        editor.classList.add("editor-dark");
        editor_header.classList.add("editor-header-dark");
        // preview and preview header dark mode
        preview.classList.add("preview-dark");
        preview_header.classList.add("editor-header-dark");
        preview_heading.style.color="white";

        bulb.style.background = "#fff9ad";
        // editor btns black theme
        editor_btns.forEach(Element=>{
            Element.style.color="white";
        });
        editor_selcetion.style.color="white";
    } else {
        document.body.style.background = "#edede5";
        header.classList.remove("header-nav-dark");
        main.classList.remove("main-dark");
        // editor and editor header dark mode
        editor.classList.remove("editor-dark");
        editor_header.classList.remove("editor-header-dark");
        // preview and preview header dark mode
        preview.classList.remove("preview-dark");
        preview_header.classList.remove("editor-header-dark");
        preview_heading.style.color="black";

        bulb.style.background = "unset";
        // editor btns white theme
        editor_btns.forEach(Element=>{
            Element.style.color="black";
        });
        editor_selcetion.style.color="black";
    }
}

// Apply the dark mode state.
document.querySelector(".tubelight").addEventListener('click', function () {
    darkmode = !darkmode;
    localStorage.setItem("darkmode", darkmode);
    setDarkMode(darkmode);
});

setDarkMode(darkmode);