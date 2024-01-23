var express = require('express');
var router = express.Router();
const messages = require('../Models/messages');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://damian:damian1216@cluster0.8eg71ou.mongodb.net/mini_message_board?retryWrites=true&w=majority";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new', {title: 'Express'});
});

router.post('/', function(req, res, next) {
  const message = new messages({text: req.body.message, user: req.body.userName, added: new Date()});

  message.save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));

});

module.exports = router;