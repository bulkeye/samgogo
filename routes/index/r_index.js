var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) { 
  let json_param = {fname:'feng'};
  res.render('index/index', json_param, function(err,html){
      if(!err){
          res.send(html);
      }else
      {
          console.log(err);
          /*
          res.render('error', { message: 'Express', error: err},function(err,html){
              res.send(html);
          });
           */
      }
      
  });
  
});

module.exports = router;
