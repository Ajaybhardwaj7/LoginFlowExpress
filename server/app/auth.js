var key = require('./config').secret_key;
var jwt = require('jsonwebtoken');

const expiry = 15 //  minutes

//Generate Token
function generateToken(req,opts){
    opts = opts || {};
    var expiresDefault =  Math.floor(new Date().getTime()/1000 + expiry*60);

    var token = jwt.sign({
        auth:req.body.username,
        exp: opts.expires || expiresDefault,
        agent: req.headers['user-agent']
    },key);

    return token;
}

//Verify token
function verify(token){
    var decoded = true;
    try{
        jwt.verify(token,key);
    }
    catch(e){
        decoded = false;
    }

    return decoded;
}

module.exports ={
    generateToken:generateToken,
    verify:verify
}