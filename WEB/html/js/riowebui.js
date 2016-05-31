async: false;
var xhttp = new XMLHttpRequest();
var dir_gear = $( '#direction').attr('data');
var key_value = $( '#key' ).attr('data');
var engine_value = $( '#engine' ).attr('data');


document.addEventListener('touchmove', this.touchmove);

function touchmove(e) {
    e.preventDefault()
}

$(document).ready(function(){
		
		//key commands
		
		$( "#key" ).ready(key_send);
		$( "#key" ).click(key_toggle);
		
		//engine commands
		$( "#engine" ).ready(engine_send);
		$( "#engine" ).click(engine_toggle);
		
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

function key_send(){
	key_value = $('#key').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "key";
	URL = URL +"?name=" + key_value;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(key_value);
}

function key_toggle(){
	if($(this).attr('data') == "keyin"){
		$(this).attr('data', "keyout");
		key_value = $('#key').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + dir_gear;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(key_value);
	} 
	else
	if($(this).attr('data') == "keyout"){
		$(this).attr('data', "keyin");
		key_value = $('#key').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + key_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(key_value);	
	}	
}

function engine_send(){
	engine_value = $('#engine').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "engine";
	URL = URL +"?name=" + engine_value;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(engine_value);
}

function engine_toggle(){
	if($(this).attr('data') == "kill"){
		$(this).attr('data', "idle");
		engine_value = $('#engine').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + engine_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(engine_value);
	} 
	else
	if($(this).attr('data') == "idle"){
		$(this).attr('data', "kill");
		engine_value = $('#engine').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + key_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(engine_value);	
	}	
}


