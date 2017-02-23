π = Math.PI;
e = Math.E;
/*assign two math constant*/
equaled = 0;
/*assign a var to clean the screen*/
function equalTest(){
	if (equaled == 1){
		constantCe();
		equaled = 0;
	}
}
function writeInfo(chars){
	equalTest();
	char = chars;
	document.getElementById("display").value = document.getElementById("display").value + char;
}
function constantCe(){
	document.getElementById("display").value = "";
	document.getElementById("equation").value = "";
}
function calOutput(){
	equaled = 1;
	var display = document.getElementById("display").value;
	if (display != ""){
		document.getElementById("equation").value = display+"=";
		document.getElementById("display").value = eval(display);
	}
}