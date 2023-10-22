const converter = new showdown.Converter();

const ribbonHtml = `
    <div class="img-ribbon">
        <button class="button-img" id="left"><span class="material-symbols-outlined" id='left'>format_align_left</span></button>
        <button class="button-img" id="center"><span class="material-symbols-outlined" id='center'>format_align_center</span></button>
        <button class="button-img" id="right"><span class="material-symbols-outlined" id='right'>format_align_right</span></button>
    </div>
`   

function createRibbon(img, ind, imgs){
    // * Do Not Change following code
    const imgp = img.parentElement;

    imgs[ind] = img;
    
    imgp.style.position = 'relative'
    imgp.innerHTML += ribbonHtml;

}


document.querySelector('#recompile').addEventListener('click', ()=>{
    let md = document.querySelector('#textarea').value;
    let html = converter.makeHtml(md);

    document.querySelector('.preview').innerHTML = html;

    const imgs = document.querySelector('.preview').getElementsByTagName('img');

    [...imgs].forEach((img, ind, imgs) => {
           createRibbon(img, ind, imgs);
    });
})


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
const text = document.querySelector('#textarea');
const map = {
    'IMG':'![<alt>](<url>)\n',
    'CODE':'```<language>\n<write your code...>\n```\n',
    'LIST':'- •\n- •\n- •\n',
    'URL':'[url tex..](https://www.markdownguide.org/basic-syntax/#code)\n'
};
var buttons = document.querySelectorAll('.ribbon-button')
buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        seter = map[e.target.getAttribute('data-value')];
        insertAtCursor(text, seter);
    });
});

// for the head section
var select  = document.getElementById("add-heading");
let maphead = {
    'H1':'# here your text...',
    'H2':'## here your text...',
    'H3':'### here your text...'
}
select.addEventListener('change',function(){
    var selectedOption = select.options[select.selectedIndex];
    seter = maphead[selectedOption.value];
    insertAtCursor(text, seter);
})

function toggleEffects(e){
    
}

const container1 = document.querySelector("#textarea");
const container2 = document.querySelector(".preview");

container1.addEventListener("scroll", function() {
    const scrollPosition = container1.scrollTop;

    container2.scrollTop = scrollPosition;
});

container2.addEventListener("scroll", function() {
    const scrollPosition = container2.scrollTop;

    container1.scrollTop = scrollPosition;
});



