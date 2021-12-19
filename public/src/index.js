const express = require("express");
const router = require("../../routes");
const port = process.env.PORT;

const app = express();
app.use(express.static('public'));

app.listen(port, () => console.log(`server listening to port ${port}`));

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