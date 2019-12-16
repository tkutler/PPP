const mongoose = require('mongoose');
var controllers = require('../controllers/controllers.js');
var path = require('path');


module.exports = function(app){

  //goes to add user post method in controller
  app.post('/user', function(req, res) {
    controllers.add(req,res);

  })
  //goes to post login method in controllor
  app.post('/login', function(req, res) {
    controllers.login(req,res);

  })
  
  //goes to post newLesson method in controller
  app.post('/newLesson', function(req, res) {
    console.log("req.body",req.body);
    controllers.post(req, res);
  
    })
//if it cant find the route in the backend it will look through through the routes on angular front-end
  app.all("*", (req,res,next) => {
    console.log("in catch all")
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}
