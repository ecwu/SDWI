//RegExp Set
var regexEmail = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z]{2,5}$/;
var AllDigi = /^\d{6,16}/;
var atLeastNineDigi = /\d{8}\d{1,8}/;
var sixStnChars = /[0-9a-zA-Z]{6,16}/;
function emailVerification(id){//for email verification
    var email = document.getElementById(id).value;
    if (regexEmail.test(email)) {//if true the print right notice
        document.getElementById('reminder').innerHTML = 'Right Email Format';
        setTimeout(function(){ document.getElementById('reminder').innerHTML = '';},2000);//auto clear after 2sec
    }else{
        document.getElementById('reminder').innerHTML = 'Invalid Email Format';
        document.getElementById(id).focus();//refocus on the input table if the email is wrong
    }
}
function nicknameVerification(id){//for nickname verification
    var nickname = document.getElementById(id).value;
    if (nickname === '') {
        document.getElementById('reminder').innerHTML = 'Please Input you Nickname!';
        document.getElementById(id).focus();

    }else if(nickname !== ''){
        document.getElementById('reminder').innerHTML = 'Good Nickname!';
        setTimeout(function(){ document.getElementById('reminder').innerHTML = '';},2000);
    }
}
function passwordVerification(id){
    var password = document.getElementById(id).value;
    if (AllDigi.test(password)){//check if the password is all digi
        if (atLeastNineDigi.test(password)){//check if the digi password is more than 9 digis
            document.getElementById('reminder').innerHTML = 'Valid Password!';
            setTimeout(function(){ document.getElementById('reminder').innerHTML = '';},2000);
        }
        else{
            document.getElementById('reminder').innerHTML = 'Invalid Password';//error if the password is less than 9digis
            document.getElementById(id).focus();
        }
    }else{
        if (sixStnChars.test(password)){//check if the password (Chars)is between 6 - 16 digis
            document.getElementById('reminder').innerHTML = 'Valid Password!';
            setTimeout(function(){ document.getElementById('reminder').innerHTML = '';},2000);
        }
        else{
            document.getElementById('reminder').innerHTML = 'Invalid Password';
            document.getElementById(id).focus();
        }
    }
}
function passwordCheck(id){//password doubleCheck
    var passwordCheck = document.getElementById(id).value;
    if(passwordCheck === document.getElementById('passwordInput').value){
        document.getElementById('reminder').innerHTML = 'Password Checked';
        setTimeout(function(){ document.getElementById('reminder').innerHTML = '';},2000);
    }else{
        document.getElementById('reminder').innerHTML = 'Password not the same!';
        document.getElementById(id).focus();
    }
}
function codeVerification(id){//sample VC
    var code = document.getElementById(id).value;
    if (code === '233A'|| code === '233a') {
        document.getElementById('reminder').innerHTML = 'Right Verification Code!';
        setTimeout(function(){ document.getElementById('reminder').innerHTML = '';},2000);
    }else{
        document.getElementById('reminder').innerHTML = 'Error Verification Code!';
        document.getElementById(id).focus();
    }
}
function finalCheck() {
    if (document.getElementById("check").checked){//check if the box was checked
        return 0;
    }else{
        document.getElementById('reminder').innerHTML = 'Check the Service Agreement and the Privacy Policy';
        setTimeout(function(){ document.getElementById('reminder').innerHTML = '';},2000);
    }
}