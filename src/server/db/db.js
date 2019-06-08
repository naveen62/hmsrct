const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hmsrct', {
    useNewUrlParser:true,
    useFindAndModify:false
}, (err) => {
    if(err) return console.log(err)
    console.log('connected to database');
})