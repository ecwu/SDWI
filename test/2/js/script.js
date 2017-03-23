function zodiacClick(imgId){
	var numId = imgId.substr(6,imgId.length);
	var imgName = 'img/' + numId + '.png';
	document.getElementById('display').src = imgName;
	zodiacOutput(numId);
}

function zodiacOutput(id){
	var standard = 1898;
	var zodiacIndex = parseInt(id) + 2;
	var boxIndex = 0;
	outputInfo = '';
	if (zodiacIndex >= 12){
		zodiacIndex -= 12;
	}
	standard = standard + zodiacIndex;
	outputInfo += '<option value="' + boxIndex + '">' + standard + '</option>';
	for (var i = 1; i < 10; i += 1) {
		standard = standard + 12;
		outputInfo += '<option value="' + i + '">' + standard + '</option>';
		
	}
	document.getElementById('multiple').innerHTML = outputInfo;
}

function zodiacSubmit(){
	var zodiacYear = document.getElementById('submitZodiac').value;
	var zodiacIndex = (zodiacYear - 1898)%12;
	zodiacIndex = zodiacIndex + 10;
	if (zodiacIndex >= 12){
		zodiacIndex -= 12;
	}
	var zodiacImgId = 'zodiac' + zodiacIndex;
	zodiacClick(zodiacImgId);
}