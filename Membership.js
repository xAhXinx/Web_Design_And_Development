/*
   Assignment
   
   Author: CHEE KEAN LOK
   Date:   23.7.2021
   
   Filename: Membership.js  

*/

 /* btn */
function register(){
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    

    x.style.left= "-400px";
    y.style.left= "50px";
    z.style.left= "110px";


}

 /* Login */
function valueLogin(){
    var user=document.getElementById("user").value;
    var password=document.getElementById("password1").value; 
    
    if(user == "" || password == "")
        return false;


    else if(user == "jack" && password == "123")
    alert("Welcome " + user + " to rejoin our server!!");



    else
        alert("Login failed");
    
}

 /* btn */
function login(){
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");


    x.style.left= "50px";
    y.style.left= "450px";
    z.style.left= "0px";

}

 /* Register */
function regist(){
    var user2=document.getElementById("user2").value;
    var mail=document.getElementById("mail").value; 
    var password2=document.getElementById("password2").value; 
    var phone=document.getElementById("phone").value; 
    var gender=document.getElementById("g1").checked; 
    var gender1=document.getElementById("g2").checked; 

    if(user2 == "" || mail =="" ||password2 == "" || phone == "" || gender == "" && gender1 == "")
    return false;


    else if(user2 == "jack" && mail == "jack@gmail.com" && password2 == "123" && phone == "012-285-3759"){
        if(confirm("Are you sure to register?")){
            alert("Welcome " + user2 + " to join our server!!");
        }
    }

    else
    alert("Register failed");

}

 /* Show Password */
function userPassword1() {
    var x = document.getElementById("password1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function userPassword2() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
