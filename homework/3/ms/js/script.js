π = Math.PI;
e = Math.E;
//assign two math constant
equaled = 0;
equalclicked = 0;
//assign a var to clean the screen
function tempAns(){
    var display = document.getElementById("equation").value;
    var displaysub = display.substring(0,display.length-1);
    if (document.getElementById("equation").value != ""){
        document.getElementById("display").value = eval(displaysub);
        equaled = 0;
    }
}
function equalTest(){
	if (equaled == 1){
		constantCe();
		equaled = 0;
	}
}
function cOp(){
    if (equalclicked == 1){
        constantC();
        equalclicked = 0;
    }
}
function emptyTest(){
    if (document.getElementById("equation").value == ""){
        document.getElementById("display").value = "EMPTY ERROR";
        equaled = 1;
    }
}
function writeInfo(chars){
	equalTest();
	cOp();
	char = chars;
	document.getElementById("display").value = document.getElementById("display").value + char;
}
function writeOper(chars){
    char = chars;
    document.getElementById("equation").value = document.getElementById("equation").value + " " + document.getElementById("display").value + " " + char;
    tempAns();
    equaled = 1;
}

function constantCe(){
	document.getElementById("display").value = "";
}
function constantC(){
    document.getElementById("display").value = "";
    document.getElementById("equation").value = "";
}
function functionLogE(){
    var display = document.getElementById("display").value;
	document.getElementById("equation").value = "ln" + "(" + display + ")=";
	document.getElementById("display").value = Math.log(eval(display));
}
function functionLogTen(){
    emptyTest();
    var display = document.getElementById("display").value;
	document.getElementById("equation").value = "log" + "(" + display + ")=";
    document.getElementById("display").value = Math.log(eval(display))/Math.log(10);
}
function functionSqrt(){
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "√" + "(" + display + ")=";
    document.getElementById("display").value = Math.sqrt(eval(display));
}
function functionSin(){
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "sin" + "(" + display + ")=";
    document.getElementById("display").value = Math.sin(eval(display));
}
function functionCos(){
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "cos" + "(" + display + ")=";
    document.getElementById("display").value = Math.cos(eval(display));
}
function functionTan(){
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "tan" + "(" + display + ")=";
    document.getElementById("display").value = Math.tan(eval(display));
}
function functionFactor(){
    emptyTest();
    var display = document.getElementById("display").value;
    var output = 1;
    if (eval(display)%1 === 0){
    	for (var i=1; i<=eval(display); i++){
			output = output * i;
		}
	}
    document.getElementById("equation").value ="(" + display + ")!=";
    document.getElementById("display").value = output;
}
function functionTwoTimes(){
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value ="(" + display + ")^2=";
    document.getElementById("display").value = eval(display*display);
}
function functionXTimes(){
    emptyTest();
    var display = document.getElementById("display").value;
    var times=prompt("y=","");
    var output = 1;
    for (var i=1; i<=times; i++){
        output = output * display;
    }
    document.getElementById("equation").value ="(" + display + ")^" + times + "=";
    document.getElementById("display").value = output;
}
function calOutput(){
    equalclicked = 1;
	equaled = 1;
    emptyTest();
    writeOper('');
	var display = document.getElementById("equation").value;
	if (display != ""){
		document.getElementById("equation").value = display+"=";
		document.getElementById("display").value = eval(display);
	}
}
function delLast(){

}