/*
   Assignment
   
   Author: CHEE KEAN LOK
   Date:   23.8.2021
   
   Filename: Tutorial.js  

*/

 /* Submit Comment */
function commen(){
    var user=document.getElementById("user").value;
    var mail=document.getElementById("mail").value; 
    var comment=document.getElementById("comment").value; 


    if(user == "" || mail =="" ||comment == "")
    return false;


    else if(user == "jack" && mail == "jack@gmail.com" && comment == "Wow interesting."){
        if(confirm("Are you sure to submit?")){
            alert("Thank you " + user + " for giving comment, the comment will upload later.");
        }
    }
    

    else
    alert("Comment failed");

}


