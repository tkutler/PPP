var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



var Users = mongoose.model('Users'); 
var Events = mongoose.model('Events'); 
module.exports = {
    index: function(req, res) {
        Tasks.find({}, function(err, data){
            if (err){
                res.json(err)
            }
            res.json({message: "success", data:data})
        })
    	
    },
    show: function(req, res) {
        Tasks.findOne ({_id: req.params.id}, function (err,data){
            if (err){
                res.json(err);
            }
            else {
                res.json({message: "success", data:task})
            }

        })
    },

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
            Users.findOne({email:req.body.email}, function(err, data){
                if(err){
                    res.json({error:err, data:data});
                } else {
                    //second query here
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

delete: function(req, res) {
    Products.deleteOne ({id: req.params._id}, function (err){
        if (err){
            res.json(err)
        }
        else {
            res.json ({message: "success"})
        }
    })
},
   

put: function(req, res) {
    console.log("in controller", req.body);

    Products.findOneAndUpdate ({_id: req.params.id}, req.body, function (err,product){
        if (err){
            res.json(err)
        }
        else{
            res.json({message: "success update", data:product})
        }
    })
}
};