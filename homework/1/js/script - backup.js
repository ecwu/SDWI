var name1 = "CODE IS POETRY.";
var name2 = "LIFE IS SWEET.";
/*define two var*/
function codeil(){
    if (document.getElementById("clp").innerHTML != name1) {/*check id="dlp" equal to name1 or not*/
    	document.getElementById("clp").innerHTML = name1;/*swap*/
    	setTimeout("codeil()",2000);/*recursion*/
   	}
    else{
    	document.getElementById("clp").innerHTML = name2;/*swap*/
    	setTimeout("codeil()",2000);/*recursion*/
    }
}

setTimeout("codeil()",2000);