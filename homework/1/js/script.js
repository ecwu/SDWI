var name1 = "CODE IS POETRY.";
var name2 = "LIFE IS SWEET.";
var validator = "0";
/*define two var*/
function codeil(){
	if (validator != "0") {/*check id="dlp" equal to name1 or not*/
		document.getElementById("clp").innerHTML = name1;
		validator = "0"
		splitbox();
	}
	else{
		document.getElementById("clp").innerHTML = name2;
		validator = "1"
		splitbox();
	}
}

function splitbox(){
	if (document.getElementById("clp").innerHTML != ""){
		box = document.getElementById("clp").innerHTML;
		dbox = box.split('');
		deteleit();
	}
	else{
		codeil();
	}
}

function deteleit(){
	dbox.pop();
	document.getElementById("clp").innerHTML = dbox.join('');
	if (document.getElementById("clp").innerHTML == ""){
		return;
		splitbox();
	}
	deteleit();
};

setTimeout("splitbox()", 1000);