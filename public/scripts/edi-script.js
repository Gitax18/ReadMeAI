'use strict';
// Creating showdown converter to convert code
const converter = new showdown.Converter();
converter.setFlavor('github');

//  FORMS & CONTAINERS
const containerMarkdown = document.querySelector("#textarea");
const containerPreview = document.querySelector(".preview"); 
const formDownload = document.querySelector('.form-download');

// BUTTONS
const btnRecompile = document.querySelector('#recompile');
const btnDownload = document.querySelector('#download');
const ribbonButtons = document.querySelectorAll('.ribbon-button');

// OTHER ELEMENTS
const select  = document.getElementById("add-heading");

// Map template to add headings
const mapHeadingTags = {
    'H1':'# here your text...',
    'H2':'## here your text...',
    'H3':'### here your text...'
};

// Badges for social links
const sociallinks = {
    linkdin:'[![LinkedIn-social](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/)',
    instagram:'[![Instagram-social](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/)',
    github:'[![GitHub-social](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)'
}

// Map template to add templates of basic tags
const mapBasicTags = {
    'IMG':'![<alt>](<url>)\n',
    'CODE':'```<language>\n<write your code...>\n```\n',
    'LIST':'- •\n- •\n- •\n',
    'URL':'[url tex..](https://www.markdownguide.org/basic-syntax/#code)\n',
    'SOCIAL':`${sociallinks.github}\n${sociallinks.linkdin}\n${sociallinks.instagram}`
};

//  ********************************************* FUNCTIONS **********************************
// Function to add ribbon to images
function createRibbon(img, ind, imgs){
    const imgp = img.parentElement;
    img = imgs[ind];

    if(imgp.parentElement.tagName === 'P'){
        imgp.style.width = 'content-fit';
        const imgAP = imgp.parentElement;
        imgAP.querySelectorAll('br').forEach(ele => ele.remove )
        imgAP.classList.add('paragraph-social')
    }

    imgp.style.position = 'relative';
    imgp.style.display = 'flex';

}

// function to add md template on cursor position
function insertAtCursor(myField, myValue) {

    if (myField.selectionStart || myField.selectionStart === 0) {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
    } else {
        myField.value += myValue;
    }
    
 }

// *************************************************** EVENT LISTENER ****************************************************

window.onload = ()=>{
    code_width();
    const isPreviousData = sessionStorage.getItem('markdown');
    if(Boolean(isPreviousData)){
        containerMarkdown.value = isPreviousData;
        btnRecompile.click();
    }
}

// Making recompile button works
btnRecompile.addEventListener('click', ()=>{
    
    code_width();
    
    let md = containerMarkdown.value;
    let html = converter.makeHtml(md);
    // storing current data to sessionStorage
    sessionStorage.setItem('markdown', md);
    
    try{
        html.querySelectorAll('.pieces-code-wrapper').forEach(div => {
            div.remove();
        })
    } catch(err) {
        console.log(err)
    }
    containerPreview.innerHTML = html;

    const imgs = containerPreview.getElementsByTagName('img');


    [...imgs].forEach((img, ind, imgs) => {

            switch(img.alt){
                case 'Instagram-social':
                    img.style.height="inherit";
                break;
                case 'GitHub-social':
                    img.style.height="inherit";
                break;
                case 'LinkedIn-social':
                    img.style.height="inherit";
                break;
                default:
                    createRibbon(img, ind, imgs);
            }
        switch(img.alt){
            case 'Instagram-social':
                img.style.height="inherit";
                break;
            case 'GitHub-social':
                img.style.height="inherit";
                break;
            case 'LinkedIn-social':
                img.style.height="inherit";
                break;
        }
        createRibbon(img, ind, imgs);
    });
})

// Requesting download
btnDownload.addEventListener('click', (e)=>{
    e.preventDefault;
    // removing ribbon from images
    // const imgRibbons = document.querySelectorAll('.img-ribbon');
    // imgRibbons.forEach(rib => rib.remove());

    const html = document.querySelector('#html-inp');
    const md = document.querySelector('#markdown-inp');

    html.value = containerPreview.innerHTML;
    md.value = converter.makeMarkdown(html.value); 
    sessionStorage.clear();
    formDownload.submit();  
})

var rotate = false;
var phonebtn = document.querySelector(".phone");
phonebtn.addEventListener("click",function(){
    rotate = !rotate
    if(rotate){
        document.querySelector("#rotate-item").style.transform = "rotate(90deg)";
        document.querySelector(".main").style.flexDirection="column";
        document.querySelectorAll(".container").forEach(elem=>{
            elem.style.width="auto";
        })
    }else{
        document.querySelector("#rotate-item").style.transform = "rotate(0deg)";
        document.querySelector(".main").style.flexDirection="row";
        document.querySelectorAll(".container").forEach(elem=>{
            elem.style.width="50%";
        })
    }
})

// clearing sessionstorage if user go back to previous page
window.addEventListener('beforeunload', (e) => {
    e.returnValue = "All data will be re-generate, current data will be lost"
    return  "All data will be re-generate, current data will be lost"
  });


// Aligning Images on clicking ribbon icons
window.addEventListener('click',function(e){
    if(e.target.parentNode.parentNode.className.toLowerCase() === 'img-ribbon'){
        const img = e.target.parentNode.parentNode;
        alignimage(img, e.target.id);
    }
    function alignimage(target, align){
        target.parentNode.style.textAlign = align;
        switch(align){
            case 'left':
                target.style.right = '75%';
                break;
            case 'center':
                target.style.right = '50%';
                break;
            case 'right':
                target.style.right = '25%';
                break;
        }
    }
})


//  Adding template for basic tags
ribbonButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const seter = mapBasicTags[e.target.getAttribute('data-value')];
        insertAtCursor(containerMarkdown, seter);
    });
});

// Adding template for headings
select.addEventListener('change',function(){
    const selectedOption = select.options[select.selectedIndex];
    const seter = mapHeadingTags[selectedOption.value];
    insertAtCursor(containerMarkdown, seter);
})

// Adding Scynchronous Scrolling
containerMarkdown.addEventListener("scroll", function() {
    const scrollPosition = containerMarkdown.scrollTop;
    containerPreview.scrollTop = scrollPosition;
});

containerPreview.addEventListener("scroll", function() {
    const scrollPosition = containerPreview.scrollTop;
    containerMarkdown.scrollTop = scrollPosition;
});

// // code editor code width
function code_width(){
    var all_code_box = document.querySelectorAll('code');
    all_code_box.forEach(element => {
        element.classList.add('code-boxes');
    });
    var got_code_boxes = document.querySelectorAll('.code-boxes');
    got_code_boxes.forEach(element=>{
        if(element.textContent.split('\n').length>1){
            element.style.width = "100%";
            element.style.whiteSpace  = "pre-wrap";
        }
    })
}