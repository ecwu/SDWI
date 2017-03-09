selectSeats = 0;
var seats=[[false,false,false,false,false,false],
    [false,false,false,false,false,false],
    [true,true,true,true,true,true],
    [true,true,true,true,true,true],
    [true,true,true,true,true,true],
    [true,true,true,true,true,true],
    [true,true,true,true,true,true],
    [false,false,false,false,false,false],
    [true,true,true,true,true,true],
    [true,true,true,true,true,true],
    [true,true,true,true,true,true],
    [true,true,true,true,true,true]];
var submit=[];
var sideArray=["18","24","30","36","42","48","54","60","66","72"];
function seatInit(){
    var postion = 0;
    for (var i = 0; i < seats.length; i += 1){
        var colNum = seats[i].length;
        for (var j = 0; j < colNum; j += 1){
            postion = i * colNum + (j + 1);
            var seatIdName = "seat" + postion;
            if (seats[i][j]){
                document.getElementById(seatIdName).src = "img/normal_seats.png";
                document.getElementById(seatIdName).alt = "as";
            }else{
                document.getElementById(seatIdName).src = "img/occupied_seats2.png";
                document.getElementById(seatIdName).alt = "os";
            }
        }
    }
}
function seatSelect(seatid){
    var img = document.getElementById(seatid).alt;
    seatId = seatid.substring(4,seatid.length);
    if (img == "os"){
        alert("This seat have been occupied!")
    }else{
        if (img == "as"){
            if (selectSeats == 2){
                alert("You can only select two seats at most!");
            }else{
                document.getElementById(seatid).src = "img/seleted_seats.png";
                document.getElementById(seatid).alt = "ss";
                selectSeats += 1;
                seatArrayInfoChange(false,seatid);
                submit.push(seatId);
            }
        }else{
            document.getElementById(seatid).src = "img/normal_seats.png";
            document.getElementById(seatid).alt = "as";
            selectSeats -= 1;
            seatArrayInfoChange(true,seatid);
            var index = submit.indexOf("seatId");
            submit.splice(index,1);
        }
    }
}
function seatArrayInfoChange(type,id){
    var seatId = id;
    var seatNumber = seatId.substring(4,seatId.length);
    var j = (seatNumber%6);
    var i = (seatNumber-j)/6;
    if (sideArray.indexOf(seatNumber) != -1){
        i -= 1;
    }
    if (type){
        seats[i].splice(j-1,1,true)
    }else{
        seats[i].splice(j-1,1,false)
    }
}
function seatSubmit(){
    var seatName = [];
    var colName = ["A","B","C","J","K","L"];
    var rowName = [11,12,13,14,15,16,17,18,19,20,21,22];
    for (var a = 0; a < submit.length; a += 1){
        var num = submit[a];
        var j = (num%6);
        var i = (num-j)/6;
        if (sideArray.indexOf(num) != -1){
            i -= 1;
        }
        if (j == 0){
            j = 6;
        }
        seatName.push(rowName[i]+colName[j-1]);
    }
    if (confirm("You are Selecting: "+ seatName + "\nAre you sure?")){
        seatInit()
    }
    selectSeats = 0;
    submit=[];
}

function seatReset(){
    seats=[[false,false,false,false,false,false],
        [false,false,false,false,false,false],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true],
        [false,false,false,false,false,false],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true],
        [true,true,true,true,true,true]];
    seatInit();
    selectSeats = 0;
    submit=[];
}