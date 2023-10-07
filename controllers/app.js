const fs = require('fs');
const path = require('path');


const palmApi = require('../api/fetchPalm2');


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
    const code = req.body.code;
    console.log('incoming request', req.body);
    const description = req.body.description;
    const data = await palmApi.getData(template, code, description);
    console.log('data from api', data);
    res.render('output', {
        pageTitle: 'DocAI Generator',
        data: data
    })
}