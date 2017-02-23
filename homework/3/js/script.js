/**
 * Created by ecwu on 2/21/17.
 */

π = Math.PI;
e = Math.E;
equaled = 0;
function equalTest(){
	if (equaled == 1){
		constantCe();
		equaled = 0;
	}
}


function writeInfo(chars){
	char = chars;
	document.getElementById("display").value = document.getElementById("display").value + char;
}

function constantCe(){
	document.getElementById("display").value = "";
	document.getElementById("equation").value = "";
}

function calOutput(){
	var display = document.getElementById("display").value;
	if (display != ""){
		document.getElementById("equation").value = display;
		document.getElementById("display").value = eval(display);
		equaled = 1;
	}
}