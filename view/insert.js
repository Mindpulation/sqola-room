const express = require('express');
const app = express.Router();

const { insertRoom } = require('../controller/mongo');
const { inRoomList } = require('../validator/index');

app.post('/insert', inRoomList, insertRoom);

module.exports = app;