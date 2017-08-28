import axios from 'axios';

const auth_url = 'http://localhost:3001/auth';
const req_timeout = 60000; //60 sec

//Http call
function http_req(opts){
  return  axios(opts)
     .then(resp=>resp);
     
}
//Login Api call
export function loginForm(username,password){
   return http_req({ 
        url:auth_url,   
        method:"POST",
        data:{
            username:username,
            password:password
        },
        headers:{'Content-Type':'application/json'},
        timeout:req_timeout
    })
    .then(resp=>resp.data);
}

//Auth Validation
export function requireAuth(nextState,replace,callback){
    const token = window.sessionStorage.session;
    //check if token exists
    if(!token){
        replace('/login');
        callback();
        return;
    }
    //Token exists. Validate 
    http_req({
        url:auth_url,
        method:'GET',
        headers:{'X-ACCESS-TOKEN':token},
        timeout:req_timeout
    })
    .then(resp=>{
        resp = resp.data;
        if(resp.success === true){
            callback();
        }
    })
    .catch(err=>{
        if(!err.status){
            alert('Network error');
        }else{
             window.location='/login';
        }

    })
}
//Logout 
export function logout(){
    window.sessionStorage.removeItem('session');
    if(window.location.pathname != '/login'){
        window.location = '/login';
    }
}