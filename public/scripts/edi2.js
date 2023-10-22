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
 
 document.querySelector('#img').addEventListener('click', ()=>{
    const text = document.querySelector('#textarea');
    const tempImg = '![<alt>](<url>)';
    insertAtCursor(text, tempImg);
 })
