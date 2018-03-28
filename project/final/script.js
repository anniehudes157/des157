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
var photobookOverlay = document.getElementById('photobookOverlay');

var photo = document.getElementById('photo');
var photoOverlay = document.getElementById('photoOverlay');

var breakfast = document.getElementById('breakfast');
var breakfastOverlay = document.getElementById('breakfastOverlay');

var windowNote = document.getElementById('windowNote');
var windownoteOverlay = document.getElementById('windownoteOverlay');

var radio= document.getElementById('radio');
var radioOverlay= document.getElementById('radioOverlay');

var roomView = document.getElementById('roomView');

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var close6 = document.getElementById("close6");
var close7 = document.getElementById("close7");


var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tips = document.getElementsByTagName("tips");

var choice1a = document.getElementById('choice1a');
var choice1b = document.getElementById('choice1b');
var choice1c = document.getElementById('choice1c');

var reminder= document.getElementById("reminder");


<<<<<<< HEAD
breakfast.addEventListener('click', function(){ //opens overlay of breakfast on click
  breakfastOverlay.style.display ="block";
  close2.style.display ="block";
  photobookOverlay.style.display ="none";
  photoOverlay.style.display ="none";
  yarnOverlay.style.display ="none";
  windownoteOverlay.style.display ="none";
  radioOverlay.style.display ="none";
});

photobook.addEventListener('click', function(){ //opens overlay of photobook on click
  photobookOverlay.style.display ="block";
  close3.style.display ="block";
  breakfastOverlay.style.display ="none";
  photoOverlay.style.display ="none";
  yarnOverlay.style.display ="none";
  windownoteOverlay.style.display ="none";
  radioOverlay.style.display ="none";
});

windowNote.addEventListener('click', function(){  //opens overlay of notes on window on click
  windownoteOverlay.style.display ="block";
  close4.style.display ="block";
  photobookOverlay.style.display ="none";
  breakfastOverlay.style.display ="none";
  photoOverlay.style.display ="none";
  yarnOverlay.style.display ="none";
  radioOverlay.style.display ="none";
});

yarn.addEventListener('click', function(){  //opens overlay of yarn on click
  yarnOverlay.style.display ="block";
  close5.style.display ="block";
  photobookOverlay.style.display ="none";
  breakfastOverlay.style.display ="none";
  photoOverlay.style.display ="none";
  windownoteOverlay.style.display ="none";
  radioOverlay.style.display ="none";
});

photo.addEventListener('click', function(){   //opens overlay of photo frame on click
  photoOverlay.style.display ="block";
  close6.style.display ="block";
  photobookOverlay.style.display ="none";
  breakfastOverlay.style.display ="none";
  yarnOverlay.style.display ="none";
  windownoteOverlay.style.display ="none";
  radioOverlay.style.display ="none";
});

radio.addEventListener('click', function(){   //opens overlay of radio on click
  radioOverlay.style.display ="block";
  close7.style.display ="block";
  photobookOverlay.style.display ="none";
  breakfastOverlay.style.display ="none";
  photoOverlay.style.display ="none";
  yarnOverlay.style.display ="none";
  windownoteOverlay.style.display ="none";
=======
breakfast.addEventListener('click', function(){
  breakfastTip.style.display ="block";
});

photobook.addEventListener('click', function(){
  photobookTip.style.display ="block";
});

photo.addEventListener('click', function(){
  photoTip.style.display ="block";
});

yarn.addEventListener('click', function(){
  yarnTip.style.display ="block";
});


windowNote.addEventListener('click', function(){
  windownoteTip.style.display ="block";
});


photobook.addEventListener('click', function(){
  photobookTip.style.display ="block";
>>>>>>> parent of de627bf... updated website
});

close1.addEventListener('click', function (){
  resultBox.style.display="none";
});

close2.addEventListener('click', function (){
  breakfastOverlay.style.display="none";
});

close3.addEventListener('click', function (){
  photobookOverlay.style.display="none";
});

close4.addEventListener('click', function (){
  windownoteOverlay.style.display="none";
});

close5.addEventListener('click', function (){
  yarnOverlay.style.display="none";
});

close6.addEventListener('click', function (){
  photoOverlay.style.display="none";
});

close7.addEventListener('click', function (){
  radioOverlay.style.display="none";
});


choice1a.addEventListener('click', function() { //response to choice #1
msg2.innerHTML = "I left your breakfast at the counter. I'm going to take the kids to school and then go to work now! See you tonight!";
resultBox.style.display="none";
});

choice1b.addEventListener('click', function() {  //response to choice #2
msg2.innerHTML = "I'm good! I'm just about to take the kids to school and then go to work. I'll see you tonight!";
resultBox.style.display="none";
});

choice1c.addEventListener('click', function() {  //response to choice #3
msg2.innerHTML = "Haha, you seem active today. I'm going to take the kids to school and then go to work. I'll see you later!";
resultBox.style.display="none";
});


submitForm.addEventListener('click', function() { //plays music with the submittion of form
audio1.play()
});


document.f.onsubmit = processForm; //processes form on submit
document.f.onreset = defaultForm;  //processes default ofmr on submitForm


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

function defaultForm() { //instead of reset form, gives default options
  console.log("show Overlay2");
  submitForm.style.display = "block";
  resultBox.style.display = "block";

  var userName = "Emily";

  result.innerHTML="Your character will have the following information:<br><strong><br>Name: " + userName + "<br>Gender: Female<br>Ethnicity: White/Caucasian<br>Age: 65<br><br></strong>Press arrow below to go to next page. Close window to re-submit form.</em>"
  console.log("result");
  msg1.innerHTML="Oh! Good morning " + userName + "! You're up early, as usual.";
  msg4.innerHTML="Hey " + userName + "! The kids and I are back!";
  return false;
}

var timerId = setTimeout(function(){  //gives pop up reminding user after 3 seconds
  reminder.style.display="block";
}, 1000 *3);
