const express = require('express');

const app = express();

const path = require("path");

const port = 8000;

const db = require('./Config/Mongoose');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/assets'));

app.use(express.urlencoded({extended : true}));

app.use(express.json());

app.set('views',path.join(__dirname,'Views'));

app.use('/',require('./Routes/routes'));



app.listen(port,function(){
    console.log('Server running successfully on port '+port);
});