const Mongo = require('mongooo');
const conn = require('../env/index');

const mongo = new Mongo();
let con;

(async() => {
    con = await mongo.setup(conn.MONGO_URL, conn.MONGO_DB, conn.MONGO_COL);
})();

module.exports = {};