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


fileInp.addEventListener('change', (e)=>{
    e.preventDefault();
    const file = fileInp.files[0] 
    if (e.target.files[0]){
        const reader = new FileReader();
        reader.onload = function (event) {
            const fileContents = event.target.result;
            fileData = fileContents;
            outputScr.textContent = fileContents; // Display the file contents or process it as needed

            // changing icon and text
            uploadText.textContent = file.name;
            iconUpload.setAttribute('name', 'document-outline')
        };
        reader.readAsText(file);
    }
    // console.log('changed')
})

desc.addEventListener('keydown', ()=>{
    const data = desc.value; // getting description value
    descData = data; // adding description value to global variable 

    const words = data.split(' ').length; // getting number of words in description
    descCounter.textContent = words; // add words number to counter
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(fileData !== undefined || descData !== undefined){ // checking fileData and descData must be present
        if(descData !== undefined && descData.split(' ').length > 30){ // checking if descData, has more than 30 words
            const data = {
                code: fileData,
                description: descData
            }
            generate(data)
                .then(json => console.log(json))
                .catch(err => console.log(err));
        } else{ 
            alert('Write atleast 30 words to describe projects');
        }
    } else{
        alert('please upload file or add description of project')
    }

})


// Sending api call to server to send data
// async function generate(data){
//     console.log(data);
//     const response = await fetch('/output', {
//         method : 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     return await response.json();
// }

async function generate(data = {}) {
    const response = await fetch('/output', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}
