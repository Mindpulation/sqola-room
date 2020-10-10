// const nameSlug = require('url-slug');
// const generateRoom = (param = {}) => {
//     let res = new Object();
//     const base_url = "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=";
//     res.emailSiswa = param.emailSiswa;
//     res.nameRoom = param.nameRoom;
//     res.iconName = base_url + nameSlug(param.nameRoom);
//     return res;
// }

const generateRoom = (param = {}) => {
    let res = new Object();
    res.emailSiswa = param.emailSiswa;
    res.nameRoom = param.nameRoom;

    var regex = param.nameRoom.match(/\b\w/g) || [];
    regex = ((regex.shift() || '') + (regex.pop() || '')).toUpperCase();
    
    res.iconRoom = regex;
    return res;
}


module.exports = { generateRoom }