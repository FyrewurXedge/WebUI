async: false;
var xhttp = new XMLHttpRequest();
var dir_gear = $( '#direction').attr('data');
var key_value = $( '#key' ).attr('data');
var engine_value = $( '#engine' ).attr('data');
var left_value = $( '#leftdoor' ).attr('data');
var right_value = $( '#rightdoor' ).attr('data');
var head_value = $( '#headlights' ).attr('data');

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
		
		//leftdoor
		$( "#leftdoor" ).ready(left_send);
		$( "#leftdoor" ).click(left_toggle);
		
		//rightdoor
		$( "#rightdoor" ).ready(right_send);
		$( "#rightdoor" ).click(right_toggle);
		
		//headlights
		$( "#headlights" ).ready(head_send);
		$( "#headlights" ).click(head_toggle);
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
	console.log(URL);
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
		console.log(URL);
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
		console.log(URL);	
	}	
}

function key_send(){
	key_value = $('#key').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "key";
	URL = URL +"?name=" + key_value;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}

function key_toggle(){
	if($(this).attr('data') == "keyin"){
		$(this).attr('data', "keyout");
		key_value = $('#key').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + key_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);
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
		console.log(URL);	
	}	
}

function engine_send(){
	$(this).attr('data', "idle");
	engine_value = $('#engine').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "engine";
	URL = URL +"?name=" + engine_value;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
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
		console.log(URL);
	} 
	else
	if($(this).attr('data') == "idle"){
		$(this).attr('data', "kill");
		engine_value = $('#engine').attr('data');
		URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + engine_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);	

	}
	setTimeout(function(){
		$('#engine').attr('data', "idle");
		engine_value = $('#engine').attr('data');
		URL = document.URL;
		URL = URL.replace("riowebui.html","") + "engine";
		URL = URL +"?name=" + engine_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);
	},3500);	
}

function left_send(){
	left_value = $('#leftdoor').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "leftdoor";
	URL = URL +"?name=" + left_value;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}

function left_toggle(){
	if($(this).attr('data') == "open"){
		$(this).attr('data', "close");
		left_value = $('#leftdoor').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + left_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);
	} 
	else
	if($(this).attr('data') == "close"){
		$(this).attr('data', "open");
		left_value = $('#leftdoor').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + left_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);	
	}	
}

function right_send(){
	right_value = $('#rightdoor').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "rightdoor";
	URL = URL +"?name=" + right_value;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}

function right_toggle(){
	if($(this).attr('data') == "open"){
		$(this).attr('data', "close");
		right_value = $('#rightdoor').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + right_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);
	} 
	else
	if($(this).attr('data') == "close"){
		$(this).attr('data', "open");
		right_value = $('#rightdoor').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + right_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);	
	}	
}

function head_send(){
	head_value = $('#headlights').attr('data');
	URL = document.URL;
	URL = URL.replace("riowebui.html","") + "headlights";
	URL = URL +"?name=" + head_value;
	xhttp.open("GET", URL, true)
	xhttp.send()
	console.log(URL);
}

function head_toggle(){
	if($(this).attr('data') == "open"){
		$(this).attr('data', "close");
		head_value = $('#headlights').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + head_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);
	} 
	else
	if($(this).attr('data') == "close"){
		$(this).attr('data', "open");
		head_value = $('#headlights').attr('data');
			URL = document.URL;
		URL = URL.replace("riowebui.html","") + this.id;
		URL = URL +"?name=" + head_value;
		xhttp.open("GET", URL, true)
		xhttp.send()
		console.log(URL);	
	}	
}