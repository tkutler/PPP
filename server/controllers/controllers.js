//dependencies
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Users = mongoose.model('Users'); 
var Events = mongoose.model('Events'); 
//end dependencies




module.exports = {
   
    //to add and check user to database
    add: function(req, res) {
        if (req.body.first == ""){
            res.json({error:"Missing first name"})

        }
        else if (req.body.last == ""){
            res.json({error:"Missing last name"})
        }
        else if (req.body.password == ""){
            res.json({error:"Missing password"})
        }
        else if(req.body.email == ""){
            res.json({error:"You need to fill out your email"})
        } else {
            //checks if email exists already
            Users.findOne({email:req.body.email}, function(err, data){
                if(err){
                    res.json({error:err, data:data});
                } else {
                    if(data){
                        res.json({error:"Email already taken`", data:data});
                    } else {
                        Users.create(req.body, function(err2, data2){
                            if(err2){
                                res.json({error:err, data:data2})
                            } else {
                                res.json({success:"User created", data:data2})
                            }
                        })
                    }
                }
            }) 
        }
    },

    
    //to login and check user to db
    login: function (req,res){
        if (req.body.email == ""){
            res.json({error:"Missing email"})
        } 
        else if (req.body.password == ""){
            res.json({error:"Missing password"})
        } else {
            Users.findOne({email: req.body.email}, function(err, data){
                if(err) {
                    res.json({error: "error", errors:err});
                } else if(data == null) {
                    console.log('User not found');
                    res.json({error:"User not found", data:data});
                    return null;
                } else {
                    bcrypt.compare(req.body.password, data.password).then(result => {
                            console.log("success login")
                             console.log("test")
                            res.json({message:"User logged in", data:result})
                    })
                    .catch( bcryptError => {
                        if(bcryptError){
                            res.json({error:bcryptError})
                        }
                    })
                }
            })
        }
    },      




    //creates and checks the new booking 
    post: function (req, res){
        console.log("POST DATA", req.body);
 
        var newevent = new Events(req.body);
        
        newevent.save(function(err,data) {
  
            if(err) {
                res.json (err);
            } 
            else {
                console.log('successfully added a lesson!');
                console.log(data);
                res.json({message: "success", data:data});
            }
    });
},


   

};