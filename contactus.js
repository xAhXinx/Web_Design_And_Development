/*
   Assignment

   Author: WILLIAM LEE VOON LEIM
   Date:   27.7.2021

   Filename: contactus.js

*/
    function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

error_message.style.padding="10px";

if(name.length < 5){
    text= "PLEASE ENTER VALID NAME";
    error_message.innerHTML = text;
    return false;
}
if(email.indexOf("@")== -1 || email.length < 6){
    text= "PLEASE ENTER VALID EMAIL";
    error_message.innerHTML = text;
    return false;
}
if(message.length <=10){
    text= "PLEASE ENTER MORE THAN 10 WORDS";
    error_message.innerHTML = text;
    return false;
}
alert("Form submitted successfully !!")
return true;

}