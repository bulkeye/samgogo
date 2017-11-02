const pg_conn = require('./pg_conn');

const $p = pg_conn.$config.promise;

const bl_ifQuit = true; 

const newPromise = $p((resolve, reject) => {
    if (bl_ifQuit){
            resolve('input data');
        }
    else
        {
            reject('rejected');
        }
});

let fn_run = function(){
newPromise
        .then(fulfilled =>  console.log(fulfilled))
        .catch(error => console.log(error));
        
//pg_conn.$pool.end;
};

fn_run();
