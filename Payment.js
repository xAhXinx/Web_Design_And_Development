/*
   Assignment
   
   Author: CHEE KEAN LOK
   Date:   27.7.2021
   
   Filename: Payment.js

*/



function validate(){
    var user=document.getElementById("user").value;
    var nick=document.getElementById("nick").value; 
    var mail=document.getElementById("mail").value; 
    var number=document.getElementById("number").value; 
    var b1=document.getElementById("b1").checked; 
    var b2=document.getElementById("b2").checked; 
    var bc1=document.getElementById("bc1").checked; 
    var bc2=document.getElementById("bc2").checked; 
    var cvc=document.getElementById("cvc").value; 

    if(user == "" || nick == "" || mail == "" || b1 == "" && b2 == "" || bc1 == "" && bc2 == "" || number == "" || cvc == "")
        return false;


    else if(user == "jack" && nick == "john"  && mail == "jack@gmail.com" && number == "4514 5241 5214" && cvc == "345")
    if(confirm("Are you sure to submit?")){
        alert("Successful Purchase, " + user + " Your package will be arrived within 12 days.");
}



    else
        alert("Purchase Failed!");
    
}