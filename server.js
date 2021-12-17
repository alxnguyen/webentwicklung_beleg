const port=process.env.PORT
var express=require('express');
var app=express();
app.use(express.static('public'));
app.listen(port)