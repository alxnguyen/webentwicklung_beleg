function loginCheck()	{
	var goalWord="hunter2";
	var goalMail="huehne@htw-berlin.de";
	password=document.getElementById("password");
	email=document.getElementById("email");
	if(password.value==goalWord&&email.value==goalMail)	{
		window.location="map.html";
	} else	{
		var warning=document.getElementById("warning");
		warning.innerHTML="Nutzer oder Passwort inkorrekt";
	}
}