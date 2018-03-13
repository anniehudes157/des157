'use strict';

console.log("reading");

var audio1 = new Audio('sound/sad.mp3');

var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');

var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");

var userName = document.f.userName.value;

var submitForm = document.getElementById("submitForm");
var resultBox = document.getElementById("resultBox");
var result = document.getElementById("result");

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");

var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tips = document.getElementsByTagName("tips");

var choice1a = document.getElementById('choice1a');
var choice1b = document.getElementById('choice1b');
var choice1c = document.getElementById('choice1c');


close1.addEventListener('click', function (){
  resultBox.style.display="none";
});

close2.addEventListener('click', function (){
  tip1.style.display="none";
});

close3.addEventListener('click', function (){
  tip2.style.display="none";
});

choice1a.addEventListener('click', function() {
msg2.innerHTML = "I left your breakfast at the counter. I'm going to take the kids to school and then go to work now! See you tonight!";
});

choice1b.addEventListener('click', function() {
msg2.innerHTML = "I'm good! I'm just about to take the kids to school and then go to work. I'll see you tonight!";
});

choice1c.addEventListener('click', function() {
msg2.innerHTML = "Haha, you seem active today. I'm going to take the kids to school and then go to work. I'll see you later!";
});

document.f.onsubmit = processForm;
document.f.onreset = resetForm;


function processForm() {

  console.log("show tip1");
  submitForm.style.display = "block";
  resultBox.style.display = "block";

  var userName = document.f.userName.value;

  result.innerHTML="Your character will have the following information:<br><strong><br>Name: " + userName + "<br>Gender: Female<br>Ethnicity: White/Caucasian<br>Age: 65<br><br></strong>Press arrow below to go to next page. Close window to re-submit form.";
  console.log("result");
  msg1.innerHTML="Oh! Good morning " + userName + "! You're up early, as usual.";
  return false;

}

function resetForm() {
  console.log("show tip2");
  submitForm.style.display = "block";
  resultBox.style.display = "block";

  var userName = "Emily";

  result.innerHTML="Your character will have the following information:<br><strong><br>Name: " + userName + "<br>Gender: Female<br>Ethnicity: White/Caucasian<br>Age: 65<br><br></strong>Press arrow below to go to next page. Close window to re-submit form.</em>"
  console.log("result");
  msg1.innerHTML="Oh! Good morning " + userName + "! You're up early, as usual.";
  return false;
}
