let express = require('express');
let router = express.Router();

/* GET home page. */
 
router.get('/', function(req, res) {
  res.render('login/login', { title: '' },function(err,html){
      if(!err){
          res.send(html);
      }else
      {
        
          res.render('base/error', {errors: err},function(err,html){
              res.send(html);
          });
          
      }
      
  });
  
});

module.exports = router;
