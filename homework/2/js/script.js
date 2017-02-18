function ainfo(){
	var userName = document.getElementById("username").value;/*get username Value from the webpage*/

	function skills(){
	var selecta = document.getElementById('skilla');
	var selectb = document.getElementById('skillb');
	var selectc = document.getElementById('skillc');/*import document data to var*/
	var result = [];/*define a new array*/
	var input;/*define a empty var*/
			if (selecta.checked){/*bool check, the var checked or not*/
				result.push(selecta.value);/*add this var's value to array*/
			}
			if (selectb.checked){
				result.push(" " + selectb.value);/*add value with a space*/
			}
			if (selectc.checked){
				result.push(" " + selectc.value);
			}
		return result; /*return the array to the function*/
	}

	function emailinfo(){
	return email = document.getElementById("email").value;/*get email Value from the webpage*/
	}

	function ce(){
	var select = document.getElementsByName("city");
	var result = [];
	var option ;
		for (var i = 0, iLen = select.length; i<iLen; i++){/*set iLen as the length of the select var*//*i++ == i=i+1*/
			option = select[i];/*take the i element from var*/
			if (option.checked){/*bool check*/
				result.push(" " + option.value);/*add this value to array*/
			}
		}
		return result;/*return the array to the function*/
	}

	function position(){
		var select = document.getElementById('position');
		var result = [];
		var option ;
		for (var i = 0, iLen = select.length; i<iLen; i++){
			option = select[i];
			if (option.selected){
				result.push(" " + option.value);
			}
		}
		return result;
	}

	function jobs(){
	var select = document.getElementById('multiple');
	var result = [];
	var option;
		for (var i = 0, iLen = select.length; i<iLen; i++){
			option = select[i];
			if (option.selected){/*bool check selected or not*/
				result.push(" " + option.value);
			}
		}
		return result;
	}

	function text(){
	var select = document.getElementById('text').value;
		return select;
	}

	function file(){
	var result;
	var file = document.getElementById('file'); 
        if (file.value == ""){/*logic test: selected or empty*/
        	result = "no";
        }
        else {
        	result = "yes";
        }
        return result;
	}

function fill(){/*write this info to an undisplay input tag*/
	document.getElementById('cs').value = skills();
	document.getElementById('citye').value = ce();
	document.getElementById('po').value = position();
	document.getElementById('rj').value = jobs();
}/*for php table*/


checkinfo = "Name: " + userName + "\n"
+ "Email: " + emailinfo() + "\n"
+ "Current Skills: " + skills() + "\n"
+ "City Expected: " + ce() + "\n"
+ "Position: " + position() + "\n"
+ "Recent Jobs: " + jobs() + "\n"
+ "Work Experience: " + text() + "\n"
+ "Upload file: " + file();/*Info Matrix*/
fill();/*run the fill function*/
alert(checkinfo);/*output to info using a alert window*/
document.getElementById("gf").disabled=false;/*Allow the btn*/
document.getElementById("gf").setAttribute("class","btn btn-success")/*change style*/
}

function resetinfo(){/*a question before reset the page*/
	if(confirm("Are you sure?")){
		document.getElementById("form").reset();
	}
}

function emailchange(){
	var email = document.getElementById("email").value;
	var regt = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z]{2,5}$/;/*Reg Test Temp*/
	if (regt.test(email)) {
		document.getElementById("email").setAttribute("class","form-control has-success");/*change the box style if the value pass the reg test*/
	}else{
		document.getElementById("email").setAttribute("class","form-control has-danger");
	}
}