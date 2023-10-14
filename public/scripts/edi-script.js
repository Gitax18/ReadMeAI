const converter = new showdown.Converter();
// let imgs;

const ribbonHtml = `
    <div class="img-ribbon">
        <button class="button-img" id="align-left"><span class="material-symbols-outlined">format_align_left</span></button>
        <button class="button-img" id="align-left"><span class="material-symbols-outlined">format_align_center</span></button>
        <button class="button-img" id="align-left"><span class="material-symbols-outlined">format_align_right</span></button>
    </div>
`   

function createRibbon(img, ind, imgs){
    // *** Do Not Change following code
    console.log('Function run');
    console.log(imgs);
    const imgp = img.parentElement;
    console.log('Image Paragraph:', imgp);

    img.style.height = '20rem';
    imgs[ind] = img;

    imgp.style.position = 'relative';
    imgp.innerHTML += ribbonHtml;

    throw new Error('It works when there is error in function')

    // let imgCont = document.createElement('div');
    // imgCont.style.border = `3px solid black`;
    // imgCont.style.height = `100%`;
    // imgCont.style.width = `100%`;

    // imgCont.innerHTML = '';
    // imgCont.appendChild(img);
    // imgCont.innerHTML += ribbonHtml;

    // imgp.innerHTML = '';
    // imgp.appendChild(img);
    // imgp.innerHTML += ribbonHtml;


    // *** Write Your code here


    // console.log("************ IMG")
    // console.log(img);
    // console.log("************ IMG-P")
    // console.log(imgp);
    // console.log(imgp.childNodes); // this must not be empty, but is empty, WHY?
    // console.log("************ IMG-Cont")
    // console.log(imgCont);
    // return imgp;
    
}


document.querySelector('#recompile').addEventListener('click', ()=>{
    const imgs = document.querySelector('.preview').getElementsByTagName('img');
    console.log(imgs)

    console.log('total images in this page:', imgs.length);
    [...imgs].forEach((img, ind, imgs) => {
           createRibbon(img, ind, imgs);
    });
    

    let md = document.querySelector('#textarea').value;
	let html = converter.makeHtml(md);

    // console.log(html)
	document.querySelector('.preview').innerHTML = html;
})
