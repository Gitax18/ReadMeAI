const fs = require('fs');
const path = require('path');

const showdown = require('showdown');
const multer = require('multer');
const zip = require('express-zip');

const palmApi = require('../api/fetchPalm');

// showdown converter
const converter = new showdown.Converter();
converter.setFlavor('github');


// getting template
let template;
fs.readFile('./data/template.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    template = data;
});


// getting '/' 
exports.getApp = (req, res)=>{
    res.render('home', {
        pageTitle: 'ReadMeAI - Home'
    })
}

exports.getUpload = (req, res)=>{
    res.render('index', {
        pageTitle: 'ReadMeAI - Upload'
    })
}

// controller to sent generate readme from incoming data
exports.postApp = (req, res)=>{
    let html, dt;
    const code = req.file.filename;
    const description = req.body.description;

    try {
        dt = fs.readFileSync(`uploads/${code}`, 'utf8');
      } catch (err) {
        console.error("read error",err);
      }

    palmApi.getData(template, dt, description)
        .then(data => {
            html = converter.makeHtml(data);
            res.render('editor', {
                pageTitle: 'ReadMeAI - Editor',
                html: html,
                md: data
            });
            //deleting files from upload folder
            fs.unlink(`uploads/${code}`, (err) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log('File deleted successfully');
              });
            
        }).catch(err => console.log('error occured',err));
    
}

exports.postDownload = (req, res) => {
    const html = req.body.html;
    const md = req.body.markdown;

    const mdFilePath = path.join(__dirname, '../downloads/readme.md');
    const htmlFilePath = path.join(__dirname, '../downloads/readme.html');

    fs.writeFile(mdFilePath, md, (err) => {
      if (err) console.error(err);
      else console.log('Created md file successfully');
    });

    fs.writeFile(htmlFilePath, html, (err) => {
      if (err) console.error(err);
      else console.log('Created html file successfully');
    });

    res.zip([
      { path: mdFilePath, name: 'readme.md' },
      { path: htmlFilePath, name: 'readme.html' }
    ]);
}

