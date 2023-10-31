const form = document.querySelector('#myform');
const desc = document.querySelector('#description');
const descCounter = document.querySelector('#counter');
const fileInp = document.querySelector('#codebox');
const iconUpload = document.querySelector('.icon-upload');
const uploadText = document.querySelector('#upload-text');
const submitBtn = document.querySelector('#btn-submit');
const outputScr = document.querySelector('#output');

let descData;
let fileData;


sessionStorage.clear();

fileInp.addEventListener('change', (e)=>{
    e.preventDefault();
    const file = fileInp.files[0];
    fileData = file; // adding file to global variable

    if (e.target.files[0]){
        const reader = new FileReader();
        reader.onload = function (event) {
            const fileContents = event.target.result;
            outputScr.textContent = fileContents; // Display the file contents or process it as needed

            // changing icon and text
            uploadText.textContent = file.name;
            iconUpload.setAttribute('name', 'document-outline')
        };
        reader.readAsText(file);
    }
    // console.log('changed')
})

// preventing submission on enter.
form.addEventListener('keypress',(e)=>{
    if (e.keyCode === 13) {
        e.preventDefault();
    }
})

desc.addEventListener('keydown', (e)=>{
    const data = desc.value; // getting description value
    descData = data; // adding description value to global variable 

    const words = data.split(' ').length; // getting number of words in description
    descCounter.textContent = words; // add words number to counter
    counterValue = descCounter.innerText;
    if (counterValue >= 15 && counterValue <= 30) {
        descCounter.style.color = "green";
      } else if (counterValue > 30 && counterValue < 50) {
        descCounter.style.color = "yellow";
      } else if (counterValue > 50 && counterValue <= 64) {
        descCounter.style.color = "red";
      } else if (counterValue >= 65) {
        descCounter.style.color = "red";
      }
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(fileData !== undefined || descData !== undefined){ // checking fileData and descData must be present
        if(descData !== undefined && descData.split(' ').length >=15 && descData.split(' ').length <=60){ // checking if descData, has more than 30 words

           form.submit();
        } else{ 
            alert('Write atleast minimum 15 and maximum 45 words');
        }
    } else{
        alert('please upload file or add description of project')
    }

})
window.addEventListener('load',function(){
    desc.value = " "
    fileInp.value = ""
    outputScr.value = " "
});