const {Pool} = require('pg')

const pool = new Pool({
    user: "bar_inventory",
    host: "localhost",
    database: "bar_inventory",
    password: "1234",
    port: 5432,
})

module.exports = pool;