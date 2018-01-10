//Load database connection module
const pg_conn = require('./pg_conn');

let queries = {
 json_getLoginInfo : async (email,pw) => {
                                    return await pg_conn.task('isLoginSuccessful', async (t) => {
                                        const rslt  =  await t.oneOrNone('select public.fn_isloginsuccessful($1,$2) as result', [email,pw], r => r && r.result );
                                        return  rslt;
                                        
                                        
                                           });            
                                      }
};
//module.exports = (e   mail,pw) => {isLoginSuccessful(email,pw);};
  module.exports =   queries;                            