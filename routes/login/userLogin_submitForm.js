/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let express = require('express');
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



router.use(requestTime); 
router.use(logger); 


/* response to login request  */
router.post('/', function (req, res) {
    
    let jsn_req = JSON.parse(JSON.stringify(req.body));
    jsn_req['serverResTime'] = req.requestTime;
   
    res.send(jsn_req);
    

   

});

module.exports = router;
