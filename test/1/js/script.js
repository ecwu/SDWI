var bulb = [false,false,false,false,false,false,false,false,false,false,false,false];//init array for the bulbInit() function
var bulbDisplay = [true,true,true,true,true,true,true,true,true,true,true,true];//init array for the bulbDisplayInit() function //also use to save light bulb status
var onBulbNum = 0;//the on status number
var bulbCounter = 12;//displayed light bulb counter
var bulbIndex = 11;//last light bulb index saver
function bulbInit(){//for init all the light bulb
    for (var postion = 0; postion < bulb.length; postion += 1){
        var bulbIdName = "light" + postion;//get the full name of the light bulb("light" + number)
        if (bulb[postion]) {
            document.getElementById(bulbIdName).src = "img/on.png";//on light pic
            document.getElementById(bulbIdName).alt = "on";
        }else{
            document.getElementById(bulbIdName).src = "img/off.png";//off light pic
            document.getElementById(bulbIdName).alt = "off";
        }
    }
    infoDisplay();
}
function bulbDisplayInit(){
    for (var bulbpostion = 0; bulbpostion < bulbDisplay.length; bulbpostion += 1){
        var bulbIdName = "light" + bulbpostion;//get the light position
        if (bulbDisplay[bulbpostion]) {//if the light is on(true)
            document.getElementById(bulbIdName).className = "visibleLightBulb";//change the class style to visible
        }else{//if the light is off(false)
            document.getElementById(bulbIdName).className = "invisibleLightBulb";//change the class style to invisible
        }
    }
    infoDisplay();
}
function lightSwitch(bulbId){
    var bulbName = bulbId;//assign a new var for bulb Id Name
    var bulbNum = bulbName.substr(5,bulbId.length);//sub string to get the bulb number
    var lightStatus = document.getElementById(bulbId).alt;
    if (lightStatus == "off"){//change the bulb status(Array)
        bulb.splice(parseInt(bulbNum),1,true);
        onBulbNum += 1;//on number add 1
        infoDisplay();//refresh the data
    }else{
        bulb.splice(parseInt(bulbNum),1,false);
        onBulbNum -= 1;//on number minus 1
        infoDisplay();//refresh the data
    }
}
function lightAddAndMinus(operation){//function for add and reduce the light
    switch(operation){//read the operation type(1 for add 2 for reduce)
        case 1:
            if (bulbCounter == 12){
                return 0;
            }
            if (bulb[bulbIndex+1]){
                onBulbNum += 1;
            }
            bulbIndex += 1;
            bulbDisplay.splice(parseInt(bulbIndex),1,true);//change the array info
            bulbCounter += 1;
            bulbDisplayInit();
        break;
        case 2:
            if (bulbCounter == 1){//the bulb must more than one
                return 0;
            }
            if (bulb[bulbIndex]){
                onBulbNum -= 1;//if the reducing bulb is on minus one from the onBulbNum
            }
            bulbDisplay.splice(parseInt(bulbIndex),1,false);//change the array info
            bulbIndex -= 1;
            bulbCounter -= 1;
            bulbDisplayInit();//init the display bulb info
        break;
    }
}
function infoDisplay(){//function for Display info
    var inputInfoA = "Total Number of Lights: " + bulbCounter;
    var inputInfoB = "";
    if (onBulbNum > 1){//a more than 2 test
        inputInfoB = onBulbNum + " lights are on";
    }else{
        inputInfoB = onBulbNum + " light is on";
    }
    document.getElementById("totalNum").value = inputInfoA;//write the info to the text box
    document.getElementById("onLightNum").value = inputInfoB;
}
function turnAllOn(){
    bulb = [true,true,true,true,true,true,true,true,true,true,true,true];// change the array to all on status
    onBulbNum = bulbCounter;
    bulbInit();//init the bulb
}
function turnAllOff(){
    bulb = [false,false,false,false,false,false,false,false,false,false,false,false];// change the array to all off status
    onBulbNum = 0;//set the on bulb number to 0
    bulbInit();//init the bulb
}
function resetAll(){
    bulb = [false,false,false,false,false,false,false,false,false,false,false,false];// reset the array to original
    bulbDisplay = [true,true,true,true,true,true,true,true,true,true,true,true];// reset the array to original
    bulbIndex = 11// reset the var to original
    bulbCounter = 12;// reset the var to original
    onBulbNum = 0;// reset the var to original
    bulbInit();//init the bulb
    bulbDisplayInit();
    infoDisplay();//refresh the displayed info
}