// Adding third party libs
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// vars
const PORT = 3333

// routes
const appRoutes = require('./routes/app')


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(appRoutes);

app.use((req, res, next)=>{
    res.render('404', {
        pageTitle: 'Error',
        statusCode: res.statusCode
    })
});

app.listen(PORT,()=>{
    console.log(`server is listening at http://localhost:${PORT}`);
})
