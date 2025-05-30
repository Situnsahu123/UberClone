const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require ('../models/blacklistToken.model');

module.exports.authUser = async (req , res , next) =>{
    const token = req.cookie.token  || req.headers.authorization?.split('')[1];
    if(!token){
        return res.status(401).json({massage : "Unauthorized"})
    }
    const isBlacklisted = await blackListTokenModel.findOne({token: token})
    if(isBlacklisted){
        return res.status(401).json({massage : "Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWTR_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();

    }catch(err){
      return res.status(401).json({massage : "Unauthorized"})   
    }

}

module.exports.authCaptain = async (req, res ,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({massage : "Unauthorized"})
    }
    const isBlacklisted = await blackListTokenModel.findOne({token: token})
    if(isBlacklisted){
        return res.status(401).json({massage : "Unauthorized"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded.id)

        req.captain = captain;

        return next();

    }catch(err){
      return res.status(401).json({massage : "Unauthorized"})   
    }

}