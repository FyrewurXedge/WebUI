async: false;
var xhttp = new XMLHttpRequest();
var dir_gear = $( '#direction').attr('data');

document.addEventListener('touchmove', this.touchmove);

function touchmove(e) {
    e.preventDefault()
}

$(document).ready(function(){
	
		//start button commands
		
		$( "#start" ).taphold(mDown);
		$( "#start" ).tap(mUp);
		$( "#start" ).mousedown(mDown);
		$( "#start" ).mouseup(mUp);
		
		//stop button commands
		
		$( "#stop" ).taphold(mDown);
		$( "#stop" ).tap(mUp);
		$( "#stop" ).mousedown(mDown);
		$( "#stop" ).mouseup(mUp);
	
		
		//direction commands
		
		$(" #direction" ).ready(gear_send);
		$( "#direction" ).click(gear);
		
		//left
		
		$( "#left" ).taphold(mDown);
		$( "#left" ).tap(mUp);
		$( "#left" ).mousedown(mDown);
		$( "#left" ).mouseup(mUp);
		
		//right
		$( "#right" ).taphold(mDown);
		$( "#right" ).tap(mUp);
		$( "#right" ).mousedown(mDown);
		$( "#right" ).mouseup(mUp);		
		
	}
)
function mDown(){	
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + this.id;
	URL = URL +"?name=" + "True"
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}

function mUp(){
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + this.id;
	URL = URL +"?name=" + "False"
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}

function gear_send(){
	dir_gear = $('#direction').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "direction";
	URL = URL +"?name=" + dir_gear;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(dir_gear);
}

function gear(){
	if($(this).attr('data') == "fw"){
		$(this).attr('data', "rev");
		dir_gear = $('#direction').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + dir_gear;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(dir_gear);
	} 
	else
	if($(this).attr('data') == "rev"){
		$(this).attr('data', "fw");
		dir_gear = $('#direction').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + dir_gear;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(dir_gear);	
	}	
}