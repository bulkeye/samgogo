//Load database connection module
const pg_conn = require('./pg_conn');

let queries = {
 isLoginSuccessful : async (email,pw) => {
                                    return await pg_conn.task('isLoginSuccessful', async (t) => {
                                        const rslt  =  await t.oneOrNone('select public.isLoginSuccessful($1,$2) as result', [email,pw], r => r && r.result );
                                        return  rslt;
                                        
                                        
                                           });            
                                      }
};
//module.exports = (email,pw) => {isLoginSuccessful(email,pw);};
  module.exports =   queries;                            