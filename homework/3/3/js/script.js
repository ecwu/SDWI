π = Math.PI;
e = Math.E;
//assign two math constant
equaled = 0;
//assign a var to clean the screen
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
function functionLogE(){
	var display = document.getElementById("display").value;
	document.getElementById("equation").value = "ln" + "(" + display + ")=";
	document.getElementById("display").value = Math.log(eval(display));
}
function functionLogTen(){
	var display = document.getElementById("display").value;
	document.getElementById("equation").value = "log" + "(" + display + ")=";
    document.getElementById("display").value = Math.log(eval(display))/Math.log(10);
}
function functionSqrt(){
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "√" + "(" + display + ")=";
    document.getElementById("display").value = Math.sqrt(eval(display));
}
function functionSin(){
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "sin" + "(" + display + ")=";
    document.getElementById("display").value = Math.sin(eval(display));
}
function functionCos(){
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "cos" + "(" + display + ")=";
    document.getElementById("display").value = Math.cos(eval(display));
}
function functionTan(){
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "tan" + "(" + display + ")=";
    document.getElementById("display").value = Math.tan(eval(display));
}
function functionFactor(){
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
    var display = document.getElementById("display").value;
    document.getElementById("equation").value ="(" + display + ")^2=";
    document.getElementById("display").value = eval(display*display);
}
function functionXTimes(){
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
	equaled = 1;
	var display = document.getElementById("display").value;
	if (display != ""){
		document.getElementById("equation").value = display+"=";
		document.getElementById("display").value = eval(display);
	}
}
function delLast(){

}