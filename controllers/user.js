exports.getIndex = (req, res)=>{
    res.render('index', {
        pageTitle : "DocAI login"
    })
}

exports.postIndex = (req, res)=>{
    console.table(req);
    res.redirect('/app')
}

exports.getRegister = (req, res)=>{
    res.render('register',{
        pageTitle: "DocAI register"
    })
}

exports.postRegister = (req,res)=>{
    console.table(req.body);
    res.redirect('/app')
}