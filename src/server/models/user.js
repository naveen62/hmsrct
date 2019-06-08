const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    tokens: Array
})
userSchema.methods.genAuthToken = async function() {
    const user = this;
    const token = jwt.sign({_id: user._id}, '123sec');
    user.tokens.push(token);
    const savedUser = await user.save();
    return {
        user,
        token
    };
}
userSchema.methods.hashPassword = async function(password) {
    const user = this;
    const hash = await bcrypt.hash(password, 10);
    return hash;
}
userSchema.statics.findByToken = async function(token) {
    const User = this;
    let decode 
    try {
        decode = jwt.verify(token, '123sec');
    } catch(e) {
        return Promise.reject();
    }
    const user = await User.findOne({
        _id: decode._id,
        tokens: {$in: [token]}
    })
    return user;
}
const User = mongoose.model('User', userSchema);

module.exports = {
    User 
}