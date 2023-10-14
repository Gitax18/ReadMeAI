const converter = new showdown.Converter();

const ribbonHtml = `
    <div class="img-ribbon">
        <button class="button" id="align-left"><span class="material-symbols-outlined">format_align_left</span></button>
        <button class="button" id="align-left"><span class="material-symbols-outlined">format_align_center</span></button>
        <button class="button" id="align-left"><span class="material-symbols-outlined">format_align_right</span></button>
    </div>
`   

function createRibbon(img){
    // *** Do Not Change following code
    console.log('Function run');

    const imgp = img.parentElement;
    imgp.classList.add()

    let imgCont = document.createElement('div');
    imgCont.style.border = `3px solid black`;
    imgCont.style.height = `100%`;
    imgCont.style.width = `100%`;

    imgCont.innerHTML = '';
    imgCont.appendChild(img);
    imgCont.innerHTML += ribbonHtml;

    
    // *** Write Your code here

    console.log("************ IMG")
    console.log(img);
    console.log("************ IMG-P")
    console.log(imgp);
    console.log(imgp.childNodes); // this must not be empty, but is empty, WHY?
    console.log("************ IMG-Cont")
    console.log(imgCont);
    
}


// document.querySelector('#recompile').addEventListener('click', ()=>{
document.querySelector('.container-markdown').addEventListener('keypress', ()=>{
    const imgs = document.querySelectorAll('img');

    console.log('total images in this page:', imgs.length);
    if(imgs.length != 0){
         imgs.forEach(img => {
            if(!img.classList.contains('pieces-logo')) createRibbon(img)
         });
    }

    let md = document.querySelector('#textarea').value;
	let html = converter.makeHtml(md);

	document.querySelector('.preview').innerHTML = html;
})
