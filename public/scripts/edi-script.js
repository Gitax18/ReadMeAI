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

    
    
}


document.querySelector('#recompile').addEventListener('click', ()=>{
    let md = document.querySelector('#textarea').value;
    let html = converter.makeHtml(md);
    document.querySelector('.preview').innerHTML = html;


    const imgs = document.querySelector('.preview').getElementsByTagName('img');

    console.log('Images and length:',imgs,  imgs.length);
    [...imgs].forEach((img, ind, imgs) => {
           createRibbon(img, ind, imgs);
    });
    

})
