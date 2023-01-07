const mongoose=require("mongoose");


const UserSchema=new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
  address: String,
  email:{
    type:String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },

})

module.exports = mongoose.model('person', UserSchema);