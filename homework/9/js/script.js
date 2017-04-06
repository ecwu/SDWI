var n = 0;
var runtime1 = 0;
var run = setInterval('tableThreeD()',25);
function runLeft(){
	left = setInterval('leftThreeD()',25);
}
function leftThreeD(){
    n += 5;
    document.getElementById('leftCol').style.transform="rotateX(" + n + "deg)";
    runtime1 += 1;
    if(runtime1 === 36){
        clearInterval(left);
        runtime1 = 0;
    }
}
var m = 0;
function tableThreeD(){
    m += 5;
    document.getElementById('timetable').style.transform="rotateY(" + m + "deg)";
}