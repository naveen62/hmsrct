const express = require('express');
const router = express.Router();
const {User} = require('../models/user')
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');

router.post('/signup', async (req, res) => {
    try {
        const checkUser = await User.findOne({email:req.body.email});
        if(checkUser) {
            throw new Error('user already exists')
        }
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
        })
        newUser.password = await newUser.hashPassword(req.body.password);
        const user = await newUser.genAuthToken();
        res.send(user);
    } catch(e) {
        res.status(400).send({
            err:true,
            msg:e.message
        })
    }
})
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user) {
            throw new Error('user not found');
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) throw new Error('credentails did not match');
        const token = await user.genAuthToken();
        res.send({
            user,
            token
        })
    } catch(e) {
        res.status(400).send({
            err:true,
            msg:e.message
        })
    }
})
router.get('/logout',auth, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user._id, {
            $pull:{tokens: {$in:[req.token]}}
        }, {new:true})
        res.send(user);
    } catch(e) {

    }
})
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.send(user);
    } catch(e) {

    }
})

module.exports = router