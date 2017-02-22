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
	equalTest();
	document.getElementById("display").value = document.getElementById("display").value + chars;
}

function numBtnOne(){
	var inputChars = "1";
	writeInfo(inputChars);
}

function numBtnTwo(){
	var inputChars = "2";
	writeInfo(inputChars);
}

function numBtnThree(){
	var inputChars = "3";
	writeInfo(inputChars);
}

function numBtnFour(){
	var inputChars = "4";
	writeInfo(inputChars);
}

function numBtnFive(){
	var inputChars = "5";
	writeInfo(inputChars);
}

function numBtnSix(){
	var inputChars = "6";
	writeInfo(inputChars);
}

function numBtnSeven(){
	var inputChars = "7";
	writeInfo(inputChars);
}

function numBtnEight(){
	var inputChars = "8";
	writeInfo(inputChars);
}

function numBtnNine(){
	var inputChars = "9";
	writeInfo(inputChars);
}

function numBtnZero(){
	var inputChars = "0";
	writeInfo(inputChars);
}

function operationDot(){
	var inputChars = ".";
	writeInfo(inputChars);
}

function operationPlus(){
	var inputChars = "+";
	writeInfo(inputChars);
}

function operationMinus(){
	var inputChars = "-";
	writeInfo(inputChars);
}

function operationMultiplication(){
	var inputChars = "*";
	writeInfo(inputChars);
}

function operationDivision(){
	var inputChars = "/";
	writeInfo(inputChars);
}

function constantPi(){
	var inputChars = "π";
	writeInfo(inputChars);
}

function constantE(){
	var inputChars = "e";
	writeInfo(inputChars);
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