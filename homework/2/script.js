function ainfo(){
	var userName = document.getElementById("username").value;

	function skills(){
/*	var selecta = document.getElementById('skilla');
	var selectb = document.getElementById('skillb')
	var selectc = document.getElementById('skillc')*/
	var selecta = document.getElementById('skilla');
	var selecta = document.getElementById('skillb');
	var selecta = document.getElementById('skillc');
	var result = [];
	var input;
		for (var i = 1, iLen = select.length; i<iLen; i++){
			input = select[i];
			if (input.selected){
				jobresult.push(" " + input.value);
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
				jobresult.push(" " + option.value);
			}
		}
		return result;
	}

/*alert("User Name: " + userName);*/
alert("Array: " + skills());
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