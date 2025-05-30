const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const { use } = require('../app');
const userSchema = new mongoose.Schema({

    firstname: {
        type:String,
        required: true,
        minlength: [3,'name shoud be at least 3 characters'],
    },
    lastname: {
        type:String,
        minlength: [3,'name shoud be at least 3 characters'],
    },
    email: {
        type:String,
        required: true,
        unique: true,
        minlength: [5,'email shoud be at least 5 characters'],
    },
    password:{
        type: String,
        required:true,
        select:false,
        minlength:[8,'passwor shoud be at least 8 characters']
    },
    socketid:{
        type: String,

    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;