var bulb = [false,false,false,false,false,false,false,false,false,false,false,false];
var bulbDisplay = [true,true,true,true,true,true,true,true,true,true,true,true];
var onBulbNum = 0;
var bulbCounter = 12;
var bulbIndex = 11;
function bulbInit(){
    for (var postion = 0; postion < bulb.length; postion += 1){
        var bulbIdName = "light" + postion;
        if (bulb[postion]) {
            document.getElementById(bulbIdName).src = "img/on.png";
            document.getElementById(bulbIdName).alt = "on";
        }else{
            document.getElementById(bulbIdName).src = "img/off.png";
            document.getElementById(bulbIdName).alt = "off";
        }
    }
    infoDisplay();
}
function bulbDisplayInit(){
    for (var bulbpostion = 0; bulbpostion < bulbDisplay.length; bulbpostion += 1){
        var bulbIdName = "light" + bulbpostion;
        if (bulbDisplay[bulbpostion]) {
            document.getElementById(bulbIdName).className = "visibleLightBulb";
        }else{
            document.getElementById(bulbIdName).className = "invisibleLightBulb";
        }
    }
    infoDisplay();
}
function lightSwitch(bulbId){
    var bulbName = bulbId;
    var bulbNum = bulbName.substr(5,bulbId.length);
    var lightStatus = document.getElementById(bulbId).alt;
    if (lightStatus == "off"){
        bulb.splice(parseInt(bulbNum),1,true);
        onBulbNum += 1;
        infoDisplay();
    }else{
        bulb.splice(parseInt(bulbNum),1,false);
        onBulbNum -= 1;
        infoDisplay();
    }
}
function lightAddAndMinus(operation){
    switch(operation){
        case 1:
            if (bulbCounter == 12){
                return 0;
            }
            bulbIndex += 1;
            bulbDisplay.splice(parseInt(bulbIndex),1,true);
            bulbCounter += 1;
            bulbDisplayInit();
        break;
        case 2:
            if (bulbCounter == 1){
                return 0;
            }
            bulbDisplay.splice(parseInt(bulbIndex),1,false);
            bulbIndex -= 1;
            bulbCounter -= 1;
            bulbDisplayInit();
        break;
    }
}
function infoDisplay(){
    var inputInfoA = "Total Number of Lights: " + bulbCounter;
    var inputInfoB = "";
    if (onBulbNum > 1){
        inputInfoB = onBulbNum + " lights are on";
    }else{
        inputInfoB = onBulbNum + " light is on";
    }
    document.getElementById("totalNum").value = inputInfoA;
    document.getElementById("onLightNum").value = inputInfoB;
}
function turnAllOn(){
    bulb = [true,true,true,true,true,true,true,true,true,true,true,true];
    onBulbNum = bulbCounter;
    bulbInit();
}
function turnAllOff(){
    bulb = [false,false,false,false,false,false,false,false,false,false,false,false];
    onBulbNum = 0;
    bulbInit();
}
function resetAll(){
    bulb = [false,false,false,false,false,false,false,false,false,false,false,false];
    bulbDisplay = [true,true,true,true,true,true,true,true,true,true,true,true];
    bulbIndex = 11;
    bulbCounter = 12;
    bulbInit();
    bulbDisplayInit();
    infoDisplay();
}