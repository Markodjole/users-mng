const express = require('express');
const mongoose = require('mongoose');
const usersRoute = require('./routes/users');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const uri = "mongodb+srv://Markodjole:dkole1204@dbland-fi9nb.mongodb.net/merntest?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true},()=> console.log('database connected'))

app.get('/', (req, res) => {
    console.log('we are at home');
})
app.use('/users', usersRoute);

const port = process.env.PORT || 5000;
app.set('port', port);

app.listen(port)