π = Math.PI;
e = Math.E;
//assign two math constant
equaled = 0;//a variable for equal sign click test
//assign a var to clean the screen
dot = 0;//a variable for multi dots test
resultarray = [];
arrayorder = 0;//var for result array search
function equalTest(){//if =sign was clicked, all screen will clean before you start a new calculation
	if (equaled == 1){
		constantCe();//screen cleaning function
		equaled = 0;
		dot = 0;
	}
}
function emptyTest(){//check screen before running calOutput function
    if (document.getElementById("display").value == ""){
        document.getElementById("display").value = "EMPTY ERROR";//display screen will display ERROR info when nothing was inputted
    }
}
function writeInfo(chars){//chars is the info you want to input
    //info must inside a quotation marks
    //write info into the display input box
	equalTest();
	char = chars;//assign the info into a var call char
    if (char == "+" || char == "-" || char == "*" || char == "/"){//check if you want to input an operator
        writeOperatorInfo(chars);//check if the last char is an operator
        return;//stop the writing function
    }
	document.getElementById("display").value = document.getElementById("display").value + char;//write the info into the end of the screen
}
function constantCe(){//clear the display and equation display box
	document.getElementById("display").value = "";
	document.getElementById("equation").value = "";
    equaled = 0;
    dot = 0;
}
function functionLogE(){//a log(base e) calculation
    emptyTest();
    var display = document.getElementById("display").value;
	document.getElementById("equation").value = "ln" + "(" + display + ")=";//write info between two brackets
	document.getElementById("display").value = Math.log(eval(display));//using internal Math object
    equaled = 1;
}
function functionLogTen(){//a log(base 10) calculation
    emptyTest();
    var display = document.getElementById("display").value;
	document.getElementById("equation").value = "log" + "(" + display + ")=";
    document.getElementById("display").value = Math.log(eval(display))/Math.log(10);
    equaled = 1;
}
function functionSqrt(){//a sqrt calculation
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "√" + "(" + display + ")=";
    document.getElementById("display").value = Math.sqrt(eval(display));
    equaled = 1;
}
function functionSin(){//a sin calculation
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "sin" + "(" + display + ")=";
    document.getElementById("display").value = Math.sin(eval(display));
    equaled = 1;
}
function functionCos(){//a cos calculation
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "cos" + "(" + display + ")=";
    document.getElementById("display").value = Math.cos(eval(display));
    equaled = 1;
}
function functionTan(){//a tan calculation
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value = "tan" + "(" + display + ")=";
    document.getElementById("display").value = Math.tan(eval(display));
    equaled = 1;
}
function functionFactor(){//a factor calculation
    emptyTest();
    var display = document.getElementById("display").value;
    var output = 1;
    if (eval(display)%1 === 0){//integer check
    	for (var i=1; i<=eval(display); i += 1){//a factor computations using i and multiplication itself
			output = output * i;
		}
	}
    document.getElementById("equation").value ="(" + display + ")!=";
    document.getElementById("display").value = output;
    equaled = 1;
}
function functionTwoTimes(){//square calculation
    emptyTest();
    var display = document.getElementById("display").value;
    document.getElementById("equation").value ="(" + display + ")^2=";
    document.getElementById("display").value = eval(display*display);
    equaled = 1;
}
function functionXTimes(){//power calculation
    emptyTest();
    var display = document.getElementById("display").value;
    var times=prompt("y=","");//multiplication itself for y times
    var output = 1;
    if (times == ""){
        alert("You have to input a power number")
        return;
    }
    for (var i=1; i<=times; i += 1){
        output = output * display;
    }
    document.getElementById("equation").value ="(" + display + ")^" + times + "=";
    document.getElementById("display").value = output;
    equaled = 1;
}
function calOutput(){
	equaled = 1;
    emptyTest();
	var display = document.getElementById("display").value;
	if (display != ""){
		document.getElementById("equation").value = display+"=";//write the display screen's info to the sub screen
		document.getElementById("display").value = eval(display);//evaluate the answer
        resultarray.push(eval(display));//write the info information to the array
	}
}
function delLast(){
    var display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0,display.length-1);//delete the last char from the the display screen
    //aka keep the first char to the (last_index_char)-1 char
}
function multiDotTest(){
    if (dot == 0){//original dot value is 0 and plus one when a dot was print on the screen
        dot += 1;
        writeInfo('.');//run the write function
    }else{
        alert("Multi Dot is not allow!")//a alert windows is there are multi dots
    }
}
function writeOperatorInfo(chars){
    var display = document.getElementById("display").value;
    var lastchar = display.substring(display.length-1,display.length);//get the last char
    var char = chars;
    if (display.length == 0){
        alert("Operator cant be the first char");
        return;
    }
    if (lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/"){//check the last char
        document.getElementById("display").value = display.substring(0,display.length-1) + char;//change the operator
    }else{
        document.getElementById("display").value = document.getElementById("display").value + char;//normally write the operator
    }
    dot = 0;//reset the dot value
}
function sumForFun(){//calculate the sum of “1+2+3+…+100”
    var sum = 0;
    for (var i=1; i<= 100; i += 1){//for loop to calculate
        sum = sum + i;
    }
    document.getElementById("equation").value = 'sum of "1+2+3+…+100"' ;
    document.getElementById("display").value = sum;
    resultarray.push(sum);
    equaled = 1;
}
function resultSelector(operation){//for find the previous result
    switch(operation){
        case 0:
            arrayup();//next one
        break;
        case 1:
            arraydown();//last one
        break;
    }
}

function arrayup(){
    arrayorder += 1;
    var numorder = arrayorder + 1;
    if (resultarray[arrayorder] != undefined){
        document.getElementById("equation").value = "No." + numorder + " result is:";
        document.getElementById("display").value = resultarray[arrayorder];
    }else{
        alert("No." + arrayorder + " result is the last result");//alert if there is no next result
    }
    equaled = 1;
}

function arraydown(){
    arrayorder -= 1;
    var numorder = arrayorder + 1;
    if (resultarray[arrayorder] != undefined){
        document.getElementById("equation").value = "No." + numorder + " result is:";
        document.getElementById("display").value = resultarray[arrayorder];
    }else{
        alert("No.1 result is the first result");//alert if there is no result above
    }
    equaled = 1;
}

function insertNum(){
    equalTest();
    var lastnum = resultarray.length - 1;
    if (resultarray[arrayorder] != undefined){
        document.getElementById("display").value = document.getElementById("display").value + resultarray[arrayorder];//add the result to the display
    }else{
        document.getElementById("display").value = document.getElementById("display").value + resultarray[lastnum];//add the latest result to the display
    }
}
