const Mongo = require('mongooo').Mongooo;
const { save } = require('mongooo/lib/mongo/insert');
const conn = require('../env/index');

const { generateRoom } = require('./helper');



const mongo = new Mongo();
let con;

(async() => {
    con = await mongo.setup(conn.MONGO_URL, conn.MONGO_DB, conn.MONGO_COL);
})();


const insertRoom = async (req, res) => {
    const param = generateRoom(req.body);   
    const data = await save(con, param);
    res.send(data).status(200);
}


module.exports = { insertRoom }