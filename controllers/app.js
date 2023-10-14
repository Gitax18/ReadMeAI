const fs = require('fs');
const showdown = require('showdown');
const multer = require('multer');

const palmApi = require('../api/fetchPalm');

// Storage Engine
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//        return cb(null, 'uploads');
//     },
//     filename: function (req, file, cb)  {
//        return cb(null, `${Date.now()}#${file.originalname}`)
//     }
//   })
  
// const upload = multer({ storage })


// showdown converter
const converter = new showdown.Converter();


// getting template
let template;
fs.readFile('./data/template.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    template = data;
});


// getting / 
exports.getApp = (req, res)=>{
    res.render('index', {
        pageTitle: 'DocAI Generator'
    })
}

// controller to sent generate readme from incoming data
exports.postApp = (req, res)=>{
    console.log('incoming request', req.body);
    console.log('incoming file', req.file);
    let html, dt;
    const code = req.file.filename;
    const description = req.body.description;
    
    console.log(code, description);

    try {
        dt = fs.readFileSync(`uploads/${code}`, 'utf8');
      } catch (err) {
        console.error("read error",err);
      }

    console.log('data', dt);
    palmApi.getData(template, dt, description)
        .then(data => {
            html = converter.makeHtml(data);

            res.render('output', {
                pageTitle: 'DocAI Generator',
                html: html,
                md: data
            })
    
        }).catch(err => console.log('error occured',err));
    
    fs.unlinkSync(`uploads/${code}`)
}