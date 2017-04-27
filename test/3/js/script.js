var ChildrenDisplayStatus = 1;
//RegEx Area
var RegExID = /^\d+$/;// only Numeric numbers allowed
var RegExName = /^[a-zA-Z\s]+$/; //only Alphabetic and Spaces allowed
var RegExPassword = /^[a-zA-Z0-9]{6,8}$/; //only 6-8 characters of Alphabetic and Numeric allowed
var RegExAddress = /^[a-zA-Z0-9\s]+$/; //only Alphabetic, Numeric, and Spaces allowed
var RegExCellphone = /^13[0-9]{9}$/; // only 11 Numeric digits allowed(Start with 13)
function IDChecker(id){//Id check function
    var TestingValue = document.getElementById(id).value;//RegEx test
    if (RegExID.test(TestingValue)){
        document.getElementById(id + 'Alert').innerHTML = '';//clean the invalid info to the alert area
    }else{
        document.getElementById(id + 'Alert').innerHTML = '&nbsp;Invalid Id!';//write the invalid info to the alert area
    }
}
function NameChecker(id){//Name Check function
    var TestingValue = document.getElementById(id).value;
    if (RegExName.test(TestingValue)){
        document.getElementById(id + 'Alert').innerHTML = '';//clean the invalid info to the name alert area
    }else{
        document.getElementById(id + 'Alert').innerHTML = '&nbsp;Invalid Name!';//write the invalid info to the name alert area
    }
}
function PasswordChecker(id){//Password Check function
    var TestingValue = document.getElementById(id).value;
    if (RegExPassword.test(TestingValue)){
        document.getElementById(id + 'Alert').innerHTML = '';//clean the invalid info
        return TestingValue;//return the password to the function for password confirm
    }else{
        document.getElementById(id + 'Alert').innerHTML = '&nbsp;Invalid Password!';//write the invalid info to the password alert area
        return 0;//return the 0 for error test
    }
}
function PasswordDoubleChecker(id){//Password confirm Check function
    var TestingValue = document.getElementById(id).value;
    if (PasswordChecker('inputPassword') !== 0){//check if the password is valid first
        if (TestingValue === PasswordChecker('inputPassword')){//write the info to the alert area
            document.getElementById(id + 'Alert').innerHTML = '';//clean the invalid info to the name alert area
        }else{
            document.getElementById(id + 'Alert').innerHTML = '&nbsp;Error Confirm Password!';
        }
    }else{//if password is invalid
        document.getElementById(id + 'Alert').innerHTML = '&nbsp;Check your Password!';
    }
}
function AddressChecker(id){//Address Check function
    var TestingValue = document.getElementById(id).value;
    if (RegExAddress.test(TestingValue)){
        document.getElementById(id + 'Alert').innerHTML = '';//clean the invalid info to the alert area.
    }else{
        document.getElementById(id + 'Alert').innerHTML = '&nbsp;Invalid Address!';//write the invalid info to the address alert area
    }
}
function CellphoneChecker(id){//Cellphone check function
    var TestingValue = document.getElementById(id).value;
    if (RegExCellphone.test(TestingValue)){
        document.getElementById(id + 'Alert').innerHTML = '';//clean the invalid info to the alert area.
    }else{
        document.getElementById(id + 'Alert').innerHTML = '&nbsp;Invalid CellPhone!';//write the invalid info to the cellphone alert area
    }
}
function ChildrenDisplay() {
    if(ChildrenDisplayStatus == 0){
        document.getElementById('NoOfChildrenBox').style.display = 'none';//let the children box disappear
        ChildrenDisplayStatus = 1;//change the status number
    }else if (ChildrenDisplayStatus == 1){
        document.getElementById('NoOfChildrenBox').style.display = null;//let the children box appear
        ChildrenDisplayStatus = 0;
    }
}
function AdultsAdd() {//add a adult to the value
    var number = parseInt(document.getElementById('AdultsNumber').value);
    if (number === 20){
        return 0;//pause
    }else{
        number += 1;
        parseInt(document.getElementById('AdultsNumber').value = number);
    }
}
function AdultsMinus() {//minus a adult to the value
    var number = parseInt(document.getElementById('AdultsNumber').value);
    if (number === 1){
        return 0;//pause
    }else{
        number -= 1;
        parseInt(document.getElementById('AdultsNumber').value = number);
    }
}
function SelectedChildren(){//check how many children the user select
    var select = document.getElementById('ChildrenNumber');
    var result = [];
    var option;
    for (var i = 0, iLen = select.length; i<iLen; i++){//array used to find the selected number
        option = select[i];
        if (option.selected){/*bool check selected or not*/
            result.push(" " + option.value);
        }
    }
    if (ChildrenDisplayStatus == 1){//check if the Children select box was appeared or not
        return " 0";
    }else{
        return result; //return the info for display
    }
}
function SelectedHobbit(){//check how many hobbit a user selected
    var a = document.getElementById('HobbitA');
    var b = document.getElementById('HobbitB');
    var hobbies = "";
    if (a.checked){
        hobbies = a.value + " and ";
    }
    if (b.checked){
        if (hobbies == ""){
            hobbies = b.value;
        }else{
            hobbies += b.value;
        }
    }else{
        hobbies = a.value;
    }
    return hobbies;//return the info for data display
}
function SubmitInfoBox(){//submit function with alert
    var info = "Your ID: " + document.getElementById('inputId').value + "\n"
    + "Name: " + document.getElementById('inputName').value + "\n"
    + "Address: " + document.getElementById('inputAddress').value + "\n"
    + "Cellphone: " + document.getElementById('inputCellphone').value + "\n"
    + "You have " + document.getElementById('AdultsNumber').value + " and" + SelectedChildren() + " Children in your family. \n"
    + "Your hobbies are: " + SelectedHobbit();
    alert(info);//alert the info
}
function FillInfoBox(){//submit function with alert
    document.getElementById('oid').value = document.getElementById('inputId').value;
    document.getElementById('oname').value = document.getElementById('inputName').value;
    document.getElementById('oaddress').value = document.getElementById('inputAddress').value;
    document.getElementById('ocellphone').value = document.getElementById('inputCellphone').value;
    document.getElementById('oadult').value = document.getElementById('AdultsNumber').value;
    document.getElementById('ochild').value = SelectedChildren();
    document.getElementById('ohobby').value = SelectedHobbit();
}