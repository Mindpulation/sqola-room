const { insertRoom } = require('./schema');

const inRoomList = (req, res, next) => {
    const {value, error} = insertRoom.validate(req.body)
    if(error === undefined){next();}
    else{res.send({message:"Oppss, wrong formatting"}).status(304);}
}

module.exports = { inRoomList }