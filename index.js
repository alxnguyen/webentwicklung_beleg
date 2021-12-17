//import config from "./knexfile"
//import Knex from "knex"
//
const port=process.env.PORT
var express=require('express');
var app=express();
app.use(express.static('public'));
app.listen(port)

//const knex = Knex(config);
function loginCheck()	{
	var goalWord="hunter2";
	var goalMail="huehne@htw-berlin.de";
	password=document.getElementById("password");
	email=document.getElementById("email");
	if(password.value==goalWord&&email.value==goalMail)	{
		window.location="map.html";
	} else	{
		var warning=document.getElementById("warning");
		warning.innerHTML="falsche Username oder Passwort";
	}
}