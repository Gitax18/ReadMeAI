const converter = new showdown.Converter();

const ribbonHtml = `
    <div class="img-ribbon">
        <button class="button" id="align-left"><span class="material-symbols-outlined">format_align_left</span></button>
        <button class="button" id="align-left"><span class="material-symbols-outlined">format_align_center</span></button>
        <button class="button" id="align-left"><span class="material-symbols-outlined">format_align_right</span></button>
    </div>
`   

function createRibbon(img){

    console.log('Function run');
    const imgp = img.closest('p')

    const imgCont = document.createElement('div');
    imgCont.style.border = `3px solid black`;


    // imgp.innerHTML = `${imgCont}`;
    imgCont.innerHTML = '';

    // console.log(img)
    // console.log(ribbonHtml)
    imgCont.appendChild(img);
    imgCont += ribbonHtml;
    // imgCont.innerHTML = img + ribbonHtml;

    console.log("************ IMG")
    console.log(img);
    console.log("************ IMG-P")
    console.log(imgp);
    console.log("************ IMG-Cont")
    console.log(imgCont);
    
}


document.querySelector('#recompile').addEventListener('click', ()=>{
    const imgs = document.querySelectorAll('img');

    console.log('total images in this page:', imgs.length);

    // if(imgs.length != 0)
        imgs.forEach(img => createRibbon(img));

    let md = document.querySelector('#textarea').value;
	let html = converter.makeHtml(md);

	document.querySelector('.preview').innerHTML = html;
})