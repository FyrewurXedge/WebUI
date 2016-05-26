async: false;
$(document).ready(function()
	{
		$( "#start" ).click(startbutton);
		$( "#stop" ).click(stopbutton);
	}
)
function startbutton()
{	
	var xhttp = new XMLHttpRequest();
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "function";
	URL = URL +"?name=" + "start"
	xhttp.open("GET", URL, true)
	xhttp.send()
}

function stopbutton()
{
	var xhttp = new XMLHttpRequest();
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "function";
	URL = URL +"?name=" + "stop"
	xhttp.open("GET", URL, true)
	xhttp.send()
}