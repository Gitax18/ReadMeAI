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
        //    const data = new FormData();
        //    data.append('code', fileData);
        //    data.append('description', descData);
        //    ***************************************
            // Send the file to the server using fetch
            // fetch('output', {
                // method: 'POST',
                // body: data,
                // redirect: 'follow'
            // })
            // .then(response => {
            //     if (response.ok) {
            //         console.log(response.body)
            //         console.log( "File uploaded successfully.");

            //     } else {
            //         console.log(response)
            //         console.log("File upload failed.");
            //     }
            // })
            // .catch(error => {
                // console.error('Error:', error);
                // console.log("fetch failed.");
            // });

        //    ***************************************
           form.submit();
        } else{ 
            alert('Write atleast 30 words to describe projects');
        }
    } else{
        alert('please upload file or add description of project')
    }

})


// Sending api call to server to send data

// async function generate(data = {}) {
//     try {
//         const response = await fetch('/output', {
//           method: 'POST',
//         //   headers: {
//         //     'Content-Type': 'application/json'
//         //   },
//           body: data
//         });
    
//         return await response.json();
//       } catch (error) {
//         console.log('fetch failed', `${error}`);
//       }
// }
