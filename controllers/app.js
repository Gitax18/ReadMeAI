const fs = require('fs');
const showdown = require('showdown');

// showdown converter
const converter = new showdown.Converter();


const palmApi = require('../api/fetchPalm');
const code = `
const a = 2;
const b = 3;

const sum = a + b;
const product = a * b;

console.log(\`The sum of \${a} and \${b} is \${sum}\`);
console.log(\`The product of \${a} and \${b} is \${product}\`);
`
const description = 'This is a simple code snippet that adds two numbers and prints the sum and product of the two numbers.';

let template;

fs.readFile('./data/template.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    template = data;
});




exports.getApp = (req, res)=>{
    res.render('index', {
        pageTitle: 'DocAI Generator'
    })
}

exports.postApp = async (req, res)=>{
    console.log('incoming request', req.body);

    // const code = req.body.code;
    // const description = req.body.description;
    
    const data = await palmApi.getData(template, code, description);
    
    fs.writeFile('./data/output.md', data, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    const html = converter.makeHtml(data);

    res.render('output', {
        pageTitle: 'DocAI Generator',
        data: html
    })
}