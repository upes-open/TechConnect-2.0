var express=require('express');
var router=express.Router();
var loggedin=function(req,res,next){
    if (req.isAuthenticated()){
        next()
    }
    else{
        res.redirect('/login')
    }
}
router.get('/',function(req,res,next){
    res.render('index',{title:'Express'});
});

router.get('/login',function(req,res,next){
    res.render('login');
});

router.get('/register',function(req,res,next){
    res.render('register');
});

router.get('/chapters',function(req,res,next){
    res.send(req.session)
});

router.get('/logout',function(req,res){
    res.logout()
    res.send('/')
})
module.exports=router;