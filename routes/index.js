var express = require('express');
var router = express.Router();
const message = require('../Models/messages');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://damian:damian1216@cluster0.8eg71ou.mongodb.net/mini_message_board?retryWrites=true&w=majority";

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