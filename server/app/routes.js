var router = require('express').Router();
var auth = require('./auth');

router.get('/auth',function(req,res,next){
    var result = false;
    var token = req.headers['x-access-token'];
    if(token){
         result = auth.verify(token);
    }
    if(result){
        res.status(200);
        res.json({success:true,errorMessage:null});
    }else{
        res.status(401);
        res.json({success:false,errorMessage:"Login Error"});
    }
});

router.post('/auth',function(req,res,next){
    //validate username and password.
    var userdetails = global.lookup[req.body.username];

        if(userdetails&&(userdetails.password === req.body.password)){
            //success
            var token = auth.generateToken(req);
            res.status(200);
            res.json({success:true,errorMessage:null,token:token});
        }else{
            //failure
            res.status(401);
            res.json({success:false,errorMessage:"Login Error"});
        }
    
});

module.exports = router;