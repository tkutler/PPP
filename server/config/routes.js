const mongoose = require('mongoose');
var controllers = require('../controllers/controllers.js');
var path = require('path');


module.exports = function(app){
  app.get('/tasks', function(req, res) {
    controllers.index(req,res);

  })
  app.post('/user', function(req, res) {
    controllers.add(req,res);

  })
  app.post('/login', function(req, res) {
    controllers.login(req,res);

  })
    
  app.get('/tasks/:id', function(req, res) {
    controllers.show(req,res);

  })
  app.post('/newLesson', function(req, res) {
    console.log("req.body",req.body);
    controllers.post(req, res);
  
    })
  app.delete('/tasks/delete/:id', function(req, res) {
    controllers.delete(req, res);
      
        })
  app.put('/task/update/:id', function(req, res) {
    controllers.put(req, res);

  })
  app.all("*", (req,res,next) => {
    console.log("in catch all")
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}
