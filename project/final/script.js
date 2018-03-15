'use strict';

console.log("reading");

var audio1 = new Audio('sound/sad.mp3');
var audio2 = new Audio('sound/hopeful.mp3');

var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');

var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var msg4 = document.getElementById("msg2");

var userName = document.f.userName.value;

var submitForm = document.getElementById("submitForm");
var resultBox = document.getElementById("resultBox");
var result = document.getElementById("result");

var photobook = document.getElementById('photobook');
var photobookTip = document.getElementById('photobookTip');

var photo = document.getElementById('photo');
var photoTip = document.getElementById('photoTip');

var breakfast = document.getElementById('breakfastTip');
var breakfastTip = document.getElementById('breakfastTip');

var windowNote = document.getElementById('windowNote');
var windownoteTip = document.getElementById('windownoteTip');

var radio= document.getElementById('radio');
var radioTip= document.getElementById('radioTip');

var roomView = document.getElementById('roomView');
var items = document.getElementById('items');

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");

var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tips = document.getElementsByTagName("tips");

var choice1a = document.getElementById('choice1a');
var choice1b = document.getElementById('choice1b');
var choice1c = document.getElementById('choice1c');

var reminder= document.getElementById("reminder");


breakfast.addEventListener('click', function(){
  breakfastTip.style.display ="block";
  photobookTip.style.display ="none";
  photoTip.style.display ="none";
  yarnTip.style.display ="none";
  windownoteTip.style.display ="none";
  radioTip.style.display ="none";
});

photobook.addEventListener('click', function(){
  photobookTip.style.display ="block";
  breakfastTip.style.display ="none";
  photoTip.style.display ="none";
  yarnTip.style.display ="none";
  windownoteTip.style.display ="none";
  radioTip.style.display ="none";
});

photo.addEventListener('click', function(){
  photoTip.style.display ="block";
  photobookTip.style.display ="none";
  breakfastTip.style.display ="none";
  yarnTip.style.display ="none";
  windownoteTip.style.display ="none";
  radioTip.style.display ="none";
});

yarn.addEventListener('click', function(){
  yarnTip.style.display ="block";
  photobookTip.style.display ="none";
  breakfastTip.style.display ="none";
  photoTip.style.display ="none";
  windownoteTip.style.display ="none";
  radioTip.style.display ="none";
});


windowNote.addEventListener('click', function(){
  windownoteTip.style.display ="block";
  photobookTip.style.display ="none";
  breakfastTip.style.display ="none";
  photoTip.style.display ="none";
  yarnTip.style.display ="none";
  radioTip.style.display ="none";
});


radio.addEventListener('click', function(){
  radioTip.style.display ="block";
  photobookTip.style.display ="none";
  breakfastTip.style.display ="none";
  photoTip.style.display ="none";
  yarnTip.style.display ="none";
  windownoteTip.style.display ="none";
});

close1.addEventListener('click', function (){
  resultBox.style.display="none";
});


/**
close2.addEventListener('click', function (){
  breakfastTip.style.display="none";
});

close3.addEventListener('click', function(){
  photobookTip.style.display ="none;";
});

close4.addEventListener('click', function(){
  windownoteTip.style.display ="none;";
});

close5.addEventListener('click', function(){
  yarnTip.style.display ="none;";
});
**/

choice1a.addEventListener('click', function() {
msg2.innerHTML = "I left your breakfast at the counter. I'm going to take the kids to school and then go to work now! See you tonight!";
resultBox.style.display="none";
});

choice1b.addEventListener('click', function() {
msg2.innerHTML = "I'm good! I'm just about to take the kids to school and then go to work. I'll see you tonight!";
resultBox.style.display="none";
});

choice1c.addEventListener('click', function() {
msg2.innerHTML = "Haha, you seem active today. I'm going to take the kids to school and then go to work. I'll see you later!";
resultBox.style.display="none";
});


submitForm.addEventListener('click', function() {
audio1.play()
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
  msg4.innerHTML="Hey " + userName + "! The kids and I are back!";
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
  msg4.innerHTML="Hey " + userName + "! The kids and I are back!";
  return false;
}

var timerId = setTimeout(function(){
  reminder.style.display="block";
}, 1000 *3);
