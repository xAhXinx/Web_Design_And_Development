/*
Assignment
   
   Author: WILLIAM LEE VOON LEIM
   Date:   27.7.2021
   
   Filename: CustomerFeedback.js
*/
var imgNum = 0;
imgSlides();

function imgSlides() {    
    var a;
    var slide = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName('dot');
    for (a = 0; a < slide.length; a++) {
        slide[a].style.display = "none";
    }
    imgNum++;
    if (imgNum > slide.length) {imgNum = 1}    
    for (a = 0; a < dots.length; a++) {
      dots[a].className = dots[a].className.replace(" active","");
    }
    slide[imgNum-1].style.display = "block";  
    dots[imgNum-1].className += " active";
    setTimeout(imgSlides, 2000);
    }