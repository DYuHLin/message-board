var express = require('express');
var router = express.Router();
const message = require('../Models/messages');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
require('dotenv').config();

const mongoDB = process.env.MONGODB_CODE;

let messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  message.find().sort({added: -1})
    .then((result) => {
      res.render('index', { title: 'Express', messages: result });
    })
    .catch((err) => {console.log(err)});
});

router.get('/messages', function (req, res, next) {
  res.redirect('/');
});

module.exports = {router, messages};