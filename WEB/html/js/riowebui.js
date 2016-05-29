async: false;
var xhttp = new XMLHttpRequest();

$(document).ready(function()
	{
		$( "#start" ).taphold(mDown);
		$( "#start" ).tap(mUp);
		$( "#start" ).mousedown(mDown);
		$( "#start" ).mouseup(mUp);
		$( "#stop" ).mousedown(mDown);
		$( "#stop" ).mouseup(mUp);
	}
)
function mDown()
{	
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + this.id;
	URL = URL +"?name=" + "True"
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}

function mUp()
{
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + this.id;
	URL = URL +"?name=" + "False"
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}