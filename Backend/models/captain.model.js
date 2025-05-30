const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../app");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "name shoud be at least 3 characters"],
    },
    lastname: {
      type: String,
      minlength: [3, "name shoud be at least 3 characters"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please fill a valid email address",
    ],
    minlength: [5, "email shoud be at least 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, "passwor shoud be at least 8 characters"],
  },
  socketid: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "color shoud be at least 3 characters"],
    },
    plate:{
        type: String,
        required: true,
        minlength:[3,"palte shoud be at least 3 characters"]
    },
    capacity:{
        type:Number,
        required: true,
        minlength:[1,"capacity shoud be at least 1 character"]
    },
    vehicleType:{
        type:String,
        required:true,
        enum:["car","motorcycle","auto"],
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
  },
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return  token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema)

module.exports = captainModel;
