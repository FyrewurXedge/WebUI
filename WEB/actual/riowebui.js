async: false;
var xhttp = new XMLHttpRequest();
$(document).ready(function()
	{
		$( "#start" ).click(buttonclick);
		$( "#stop" ).click(buttonclick);
		$( "#left" ).click(buttonclick);
		$( "#right" ).click(buttonclick);
		$( "#direction" ).click(reversegear);
	}
)
function buttonclick()
{	
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "function";
	URL = URL +"?name=" + this.id
	xhttp.open("GET", URL, true)
	xhttp.send()
}

function reversegear()
{
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "function";
	URL = URL +"?name=" + "reverse"
	xhttp.open("GET", URL, true)
	xhttp.send()
}