
// Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options
});
const cn = pgp('postgres://guest:12345678@localhost:5432/test');

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;

// Using the promise protocol as configured by pg-promise:

const $p = db.$config.promise;

const resolvedPromise = $p.resolve('some data');
const rejectedPromise = $p.reject('some reason');

const newPromise = $p((resolve, reject) => {
    // call either resolve(data) or reject(reason) here
});