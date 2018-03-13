'use strict';

console.log("reading");

var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');

var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg1");

var userName = document.f.userName.value;
var tip1 = document.getElementById("tip1");
var submit1 = document.getElementById("submit");
var reset = document.getElementById("reset");
var audio1 = new Audio('sound/sad.mp3');
var submitForm = document.getElementById("submitForm");
var result = document.getElementById("result");

var choice1a = document.getElementById('choice1a');
var choice1b = document.getElementById('choice1b');
var choice1c = document.getElementById('choice1c');


choice1a.addEventListener('click', function() {

msg2.innerHTML = "That's great. What do you want for breakfast today?";
return false;
});

/*
choice1b.addEventListener('click', function() {
msg2.innerHTML = "I'm glad you feel good! What do you want for breakfast today?";
msg1.style.display="none";
});

choice1c.addEventListener('click', function() {
msg2.innerHTML = "Oh no. We can go check with the doctor tomorrow. hat do you want for breakfast today?";
msg1.style.display="none";
});
*/

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

c
function processForm() {

  console.log("show tip1");
  submitForm.style.display = "block";
  result.style.display = "block";

  var userName = document.f.userName.value;

  result.innerHTML="Your character will have the identity of the following:<br><br>Name: " + userName + "<br>Gender: Female<br>Ethnicity: White/Caucasian<br><br>To change your information, please fill out the form again.<br><br><em>**If you refresh, your information will be lost.</em>"
  console.log("result");
  msg1.innerHTML="Good morning " + userName + "! How are you feeling?";
  return false;

}

function resetForm() {
  console.log("show tip2");
  submitForm.style.display = "block";
  result.style.display = "block";

  var userName = "Emily";

  result.innerHTML="Your character will have the identity of the following:<br><br>Name: " + userName + "<br>Gender: Female<br>Ethnicity: White/Caucasian<br><br>To change your information, please fill out the form again.<br><br><em>**If you refresh, your information will be lost.</em>"
  console.log("result");
  msg1.innerHTML="Good morning " + userName + "! How are you feeling?";
  return false;
}
