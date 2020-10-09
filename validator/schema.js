const joi = require('joi');

const insertRoom = joi.object().keys({
    emailSiswa: joi.string().email().required(),
    nameRoom: joi.string().required()
});

module.exports = { insertRoom }