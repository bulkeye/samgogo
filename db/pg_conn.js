// Loading bluebird module
/**   
    const Promise = require('bluebird');
    const initOptions = {
    promiseLib: Promise
    };
 **/


const initOptions = {
    
    // pg-promise initialization options...
    
    //trigger task event to get execution duration of task execution time
    task(e) {
        if (e.ctx.finish) {
            // this is a task->finish event;
            console.log('Duration:', e.ctx.duration);
            if (e.ctx.success) {
                // e.ctx.result = resolved data;
            } else {
                // e.ctx.result = error/rejection reason;
            }
        } else {
            // this is a task->start event;
            console.log('Start Time:', e.ctx.start);
        }
    },
    
    //trigger transact event to get execution duration of transaction time
     transact(e) {
        if (e.ctx.finish) {
            // this is a transaction->finish event;
            console.log('Tx Duration:', e.ctx.duration);
            if (e.ctx.success) {
                // e.ctx.result = resolved data;
            } else {
                // e.ctx.result = error/rejection reason;
            }
        } else {
            // this is a transaction->start event;
            console.log('Tx Start Time:', e.ctx.start);
        }
    }
    
};
// Loading and initializing the library:
const pgp = require('pg-promise')(initOptions);

/*
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'my-database-name',
    user: 'user-name',
    password: 'user-password'
};
*/

const cn = 'postgres://guest:12345678@localhost:5432/test';

// Creating a new database instance from the connection details:
let db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;
