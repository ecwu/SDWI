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
            }
        }else{
            document.getElementById(seatid).src = "img/normal_seats.png";
            document.getElementById(seatid).alt = "as";
            selectSeats -= 1;
        }
    }
}
function seatSubmit(){

}