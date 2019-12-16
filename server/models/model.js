var mongoose = require('mongoose');
//shema 
const UserSchema = new mongoose.Schema({
    email: {
      type: String, 
      required: [true, "email is required"],
      minlength: [3, "type must be more than 3 characters long"]
    },
    first: {
      type: String, 
      required: [true, "first name is required"],
      minlength: [3, "first name must be more than 3 characters long"]
    },
    last: {
      type: String, 
      required: [true, "last name is required"],
      minlength: [3, "last name must be more than 3 characters long"]
    },
    password: {
      type:String, 
      required: [true, "password is required"],
      minlength: [6, "password must be more than 6 characters long"]

    }

    
  
  }, {timestamps:true});
  mongoose.model('Users', UserSchema);
  const Users = mongoose.model('Users');

   const EventSchema = new mongoose.Schema({
    street: {
      type: String, 
      required: [true, "street is required"],
      minlength: [2, "street must be more than 2 characters long"]
    },
    city: {
      type: String, 
      required: [true, "city name is required"],
      minlength: [2, "city must be more than 2 characters long"]
    },
    day: {
      type: String, 
      required: [true, "day is required"],

    },
    request: {
      type: String, 
      minlength: [2, "request must be more than 2 characters long"]
      ,

    },
    time: {
      type:String, 
      required: [true, "preferred time is required"],

    },
    hours: {
      type:Number, 
      required: [true, "preferred time is required"],

    }


    
  
   }, {timestamps:true});
   mongoose.model('Events', EventSchema);
   const Events = mongoose.model('Events');
