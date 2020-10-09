const nameSlug = require('url-slug');
const generateRoom = (param = {}) => {
    let res = new Object();
    const base_url = "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=";
    res.emailSiswa = param.emailSiswa;
    res.nameRoom = nameSlug(param.nameRoom);
    res.iconName = base_url + nameSlug(param.nameRoom);
    return res;
}

module.exports = { generateRoom }