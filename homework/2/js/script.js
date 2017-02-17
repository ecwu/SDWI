function ainfo(){
	var userName = document.getElementById("username").value;

	function skills(){
	var selecta = document.getElementById('skilla');
	var selectb = document.getElementById('skillb');
	var selectc = document.getElementById('skillc');/*import document data to var*/
	var result = [];/*define a new array*/
	var input;
			if (selecta.checked){/**/
				result.push(" " + selecta.value);
			}
			if (selectb.checked){
				result.push(" " + selectb.value);
			}
			if (selectc.checked){
				result.push(" " + selectc.value);
			}
		return result; 
	}

	function ce(){
	var select = document.getElementsByName("city");
	var result = [];
	var option ;
		for (var i = 0, iLen = select.length; i<iLen; i++){
			option = select[i];
			if (option.checked){
				result.push(" " + option.value);
			}
		}
		return result;
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
			if (option.selected){
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
        if (file.value == ""){
        	result = "no";
        }
        else {
        	result = "yes";
        }
        return result;
	}

checkinfo = "Name: " + userName + "\n" + "Current Skills: " + skills() + "\n" + "City Expected: " + ce() + "\n" + "Position: " + position() + "\n" + "Recent Jobs: " + jobs() + "\n" + "Work Experience: " + text() + "\n" + "Upload file: " + file();
/*alert("User Name: " + userName);*/
alert(checkinfo);
}

function resetinfo(){
	if(confirm("Are you sure?")){
		document.getElementById("form").reset();
	}
}

function emailchange(){
	var email = document.getElementById("email");
	var atindex = document.getElementById("email").value.indexOf("@");
	var gotindex = document.getElementById("email").value.indexOf(".");
	if (atindex == -1 || gotindex == -1) {
		document.getElementById("email").setAttribute("class","form-control has-danger");
	}else if (gotindex-1 == atindex){
		document.getElementById("email").setAttribute("class","form-control has-danger");
	}else{
		document.getElementById("email").setAttribute("class","form-control has-success");
	}
}