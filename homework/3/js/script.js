/**
 * Created by ecwu on 2/21/17.
 */
function numBtnOne(){
	document.getElementById("display").value = document.getElementById("display").value + "1";
}

function numBtnTwo(){
	document.getElementById("display").value = document.getElementById("display").value + "2";
}

function numBtnThree(){
	document.getElementById("display").value = document.getElementById("display").value + "3";
}

function numBtnFour(){
	document.getElementById("display").value = document.getElementById("display").value + "4";
}

function numBtnFive(){
	document.getElementById("display").value = document.getElementById("display").value + "5";
}

function numBtnSix(){
	document.getElementById("display").value = document.getElementById("display").value + "6";
}

function numBtnSeven(){
	document.getElementById("display").value = document.getElementById("display").value + "7";
}

function numBtnEight(){
	document.getElementById("display").value = document.getElementById("display").value + "8";
}

function numBtnNine(){
	document.getElementById("display").value = document.getElementById("display").value + "9";
}

function numBtnZero(){
	document.getElementById("display").value = document.getElementById("display").value + "0";
}

function operationPlus(){
	document.getElementById("display").value = document.getElementById("display").value + "+";
}

function operationMinus(){
	document.getElementById("display").value = document.getElementById("display").value + "-";
}

function operationMultiplication(){
	document.getElementById("display").value = document.getElementById("display").value + "*";
}

function operationDivision(){
	document.getElementById("display").value = document.getElementById("display").value + "/";
}

function constantPi(){
	document.getElementById("display").value = document.getElementById("display").value + "π";
}

function calOutput(){
	var pi = document.getElementById("display")
	var display = document.getElementById("display").value;
	pi = pi.indexOf("π");
	if (display != ""){
		document.getElementById("display").value = eval(display);
	}
	alert(pi);
}