'use strict';

console.log("reading");

//document.f.onsubmit = processForm;

var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');
var userName = document.f.userName.value;
var myMsg = document.getElementById("myMsg");

function processForm() {
page4.style.display = "block";
page3.style.display = "none";

myMsg.innerHTML="Good morning " + userName + "! How are you feeling?";
return false;

}
