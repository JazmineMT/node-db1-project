const knex = require("knex");

const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgres.
const database = "production";

const db = knex(knexfile[database])
module.exports = db;


// const knex = require('knex');

// const config = {
//   client: 'sqlite3',
//   connection: {
//     filename: './data/seeds/bugdet.db3',
//   },
//   useNullAsDefault: true,
// };
// const db = knex(config)

// module.exports = db ;