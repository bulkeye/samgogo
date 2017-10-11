
// Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options
});
const cn = pgp('postgres://guest:12345678@localhost:5432/test');

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;