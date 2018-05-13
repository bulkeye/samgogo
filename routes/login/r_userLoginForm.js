/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let express = require('express');
let pg_queries = require('../../db/pg_queries');
let router = express.Router();
 


let requestTime = function (req, res, next) {
  let obj_date = new Date();
  req.requestTime = obj_date.toLocaleTimeString() + " " + obj_date.toLocaleDateString()  ;
  next();
};


let logger = function(req,res, next){
    console.log("request at " + req.requestTime + " : " + JSON.stringify(req.body));
    next();
};

let LoginInfo = 
   async (req, res, next) => {    
    let jsn_loginReq =  JSON.parse(JSON.stringify(req.body));
    req.loginInfo = 
    await (pg_queries.json_getLoginInfo(jsn_loginReq['email'], jsn_loginReq['pw']))
        .then((rslt) => {return rslt;})
        .catch((error) => {console.log("error is: " + error);});
    next();
};


router.use(requestTime); 
router.use(logger); 
router.use(LoginInfo); 

/* response to login request  */
router.post('/', function (req, res) {
    
    let jsn_res = {
        serverResTime: req.requestTime,
        loginInfo: req.loginInfo
    }; 
    
    
    let jsn_resFinal = JSON.parse(JSON.stringify(jsn_res));
    console.log(jsn_resFinal);
    res.send(jsn_resFinal);
    
    
   

});






module.exports = router;
