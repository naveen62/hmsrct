require('./db/db');
const express = require('express');
const app = express();

// routes 
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/user', userRoutes);

app.listen(3001, (err) => {
    if(err) return console.log(err);
    console.log('server is running');
})