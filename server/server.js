var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./app/routes');
var users = require('./app/data/users');
var _ = require('lodash');

var app = express();

console.log('Environment - '+app.get('env'));

//ENABLE CORS 
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-ACCESS-TOKEN, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS');
    if(req.method=='OPTIONS'){
        res.status(200);
        res.send();
    }else{
        next();
    }
})

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//cookie Parser
app.use(cookieParser());

//Router
app.use('/',routes);

//error Handling
app.use(function(err,req,res,next){
    res.status = 500;
    res.send(err.message);
})

//create lookups for usernames
console.log('Creating Lookups...');
global.lookup = _.reduce(users, function(lookup,user){
    lookup[user.username] = user;
    return lookup;
},{});
console.log('Lookups creation finished...');


app.listen(3001, function(){
    console.log('The server is running at port '+3001);
})