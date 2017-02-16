function ainfo(){
	var userName = document.getElementById("username").value;

	function skills(){
	var selecta = document.getElementById('skilla');
	var selectb = document.getElementById('skillb');
	var selectc = document.getElementById('skillc');
	var result = [];
	var input;
			if (selecta.checked){
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
	var select = document.getElementById("city");
	var option = select.value;
		for (var i = 0, iLen = select.length; i<iLen; i++){
			option = select[i];
			if (option.selected){
				jobresult.push(" " + option.value);
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

	function jobsdata(){
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
/*alert("User Name: " + userName);*/
alert("Array: " + ce());
}






















/*function jobs(select) {
	var result = [];
	var options = select && select.options;
	var opt;
	for (var i=0, iLen=options.length; i<iLen; i++) {
		opt = options[i];
		if (opt.selected) {
			result.push(opt.value || opt.text);
		}
	}
	return result;
}*/