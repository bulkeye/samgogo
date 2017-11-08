//Load database connection module
const pg_conn = require('./pg_conn');

function isLoginSucceed(email,pw) {
  return pg_conn.task('getUserId', t => {
            return t.any('select public.isLoginSuccessful($1,$2) as result', [email,pw], row => {} )
            .then((data) =>{
                            if(data instanceof Array){
                                for (let a of data){
                                    console.log(a.result);
                                } 
                            }else{
                                throw error("returned data type is NOT array");
                            }
                        }
            )
    
            .catch(error =>{console.log("An error occured: " + error);});

            
         });            
}

