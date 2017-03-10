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
    [true,true,true,true,true,true]];//seats array for photo change
var submit=[];//array for saving the seats info
var sideArray=["18","24","30","36","42","48","54","60","66","72"];//special side-seat number
var selectSeats = 0;//a selected seat(s) counter
function seatInit(){//init seat info
    var postion = 0;
    for (var i = 0; i < seats.length; i += 1){//init the seats by row
        var colNum = seats[i].length;//get seats number in this row
        for (var j = 0; j < colNum; j += 1){//init every seats in the row
            postion = i * colNum + (j + 1);//calculate seat id
            var seatIdName = "seat" + postion;//generate seat name
            if (seats[i][j]){
                document.getElementById(seatIdName).src = "img/normal_seats.png";//'true' as normal seat(available)
                document.getElementById(seatIdName).alt = "as";
            }else{
                document.getElementById(seatIdName).src = "img/occupied_seats2.png";//'false' as occupied seat
                document.getElementById(seatIdName).alt = "os";
            }
        }
    }
}
function seatSelect(seatid){
    var img = document.getElementById(seatid).alt;
    seatId = seatid.substring(4,seatid.length);//using substring to get seat id
    if (img == "os"){
        alert("This seat have been occupied!")//occupied seats cant selected
    }else{
        if (img == "as"){
            if (selectSeats == 2){//make sure user not selected more than two seats
                alert("You can only select two seats at most!");
            }else{//if user selected seat number is less than 2
                document.getElementById(seatid).src = "img/seleted_seats.png";//change seat photo
                document.getElementById(seatid).alt = "ss";
                selectSeats += 1;//seat counter add 1
                seatArrayInfoChange(false,seatid);//change seats array info
                submit.push(seatId);//write seatid to the submit array
            }
        }else{
            document.getElementById(seatid).src = "img/normal_seats.png";//change seat photo
            document.getElementById(seatid).alt = "as";
            selectSeats -= 1;//seat counter minus 1
            seatArrayInfoChange(true,seatid);//change seats array info
            var index = submit.indexOf("seatId");//get the elements index in submit array
            submit.splice(index,1);//del that element in the array
        }
    }
}
function seatArrayInfoChange(type,id){
    var seatId = id;
    var seatNumber = seatId.substring(4,seatId.length);//using substring to get seat id
    var j = (seatNumber%6);//get original j index of the seat number
    var i = (seatNumber-j)/6;//get original i index of the seat number
    if (sideArray.indexOf(seatNumber) != -1){//if the seat number is the side-seat
        i -= 1;//seat i index minus 1
    }
    if (type){//change array info
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
        var j = (num%6);//get original j index of the seat number
        var i = (num-j)/6;//get original i index of the seat number
        if (sideArray.indexOf(num) != -1){//if the seat number is the side-seat
            i -= 1;//seat i index minus 1
        }
        if (j == 0){//if the seat number is the side-seat
            j = 6;//set special seat j index
        }
        seatName.push(rowName[i]+colName[j-1]);//add the seat name([Seat row number]+[Seat Col Name])to the final output array
    }
    if (confirm("You are Selecting: "+ seatName + "\nAre you sure?")){//a confirm windows
        seatInit()//change the selected seats to occupied seats
    }
    selectSeats = 0;
    submit=[];//reset the seats counted and submit array
}

function seatReset(){//reset the page
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
        [true,true,true,true,true,true]];//reset the seats array info
    seatInit();
    selectSeats = 0;
    submit=[];
}