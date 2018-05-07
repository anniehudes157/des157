'use strict';
var bgSound = new Audio('sound/sad.mp3');
var start=document.getElementById("start");
var pause=document.getElementById("pause");

var box=document.getElementById("box");
var boxWords =document.getElementById("boxWords");
var submitForm =document.getElementById("submitForm");
var sideNav =document.getElementById("sideNav");

var about1 =document.getElementById("about1");
var about3 =document.getElementById("about3");
var question1 =document.getElementById("question1");
var question3 =document.getElementById("question3");

var close1 =document.getElementById("close1");
var close2 =document.getElementById("close2");
var close3 =document.getElementById("close3");
var close4 =document.getElementById("close4");
var close5 =document.getElementById("close5");
var close6 =document.getElementById("close6");
var close7 =document.getElementById("close7");


var msg1 =document.getElementById("msg1");
var msg2 =document.getElementById("msg2");

var choice1a =document.getElementById("choice1a");
var choice1b =document.getElementById("choice1b");

var bedroom =document.getElementById("bedroom");
var reminder =document.getElementById("reminder");

var breakfastTip =document.getElementById("breakfastTip");
var photobookTip =document.getElementById("photobookTip");
var stickynoteTip =document.getElementById("stickynoteTip");
var radioTip =document.getElementById("radioTip");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

bgSound.loop = true;
bgSound.play();

question1.addEventListener('click', function(){
  about1.style.display="block";
});

question3.addEventListener('click', function(){
  about3.style.display="block";
});

//closing overlays
close1.addEventListener('click', function(){
  box.style.display="none";
});

close2.addEventListener('click', function(){
  breakfastTip.style.display="none";
});

close3.addEventListener('click', function(){
  photobookTip.style.display="none";
});

close4.addEventListener('click', function(){
  stickynotesTip.style.display="none";
});

close5.addEventListener('click', function(){
  radioTip.style.display="none";
});

close6.addEventListener('click', function(){
  yarnTip.style.display="none";
});

close7.addEventListener('click', function(){
  photoTip.style.display="none";
});

//changes responses based on choice
choice1a.addEventListener('click', function(){
  msg2.innerHTML="Just letting you know that the kids and I are off to school and work. See you later!"
});

choice1b.addEventListener('click', function(){
  msg2.innerHTML="I'm good! Just letting you know that I'm taking the kids to school and working. I'll see you later!"
});

//add warning
submitForm.addEventListener('click', function(){
  box.style.display="none";
});

//overlays on self-exploration page
breakfast.addEventListener('click', function(){
  breakfastTip.style.display="block";
  photobookTip.style.display="none";
  stickynotesTip.style.display="none";
  radioTip.style.display="none";
  yarnTip.style.display="none";
  photoTip.style.display="none";
});

photobook.addEventListener('click', function(){
  breakfastTip.style.display="none";
  photobookTip.style.display="block";
  stickynotesTip.style.display="none";
  radioTip.style.display="none";
  yarnTip.style.display="none";
  photoTip.style.display="none";
});

stickynote.addEventListener('click', function(){
  breakfastTip.style.display="none";
  photobookTip.style.display="none";
  stickynotesTip.style.display="block";
  radioTip.style.display="none";
  yarnTip.style.display="none";
  photoTip.style.display="none";
});

radio.addEventListener('click', function(){
  breakfastTip.style.display="none";
  photobookTip.style.display="none";
  stickynotesTip.style.display="none";
  radioTip.style.display="block";
  yarnTip.style.display="none";
  photoTip.style.display="none";
});

yarn.addEventListener('click', function(){
  breakfastTip.style.display="none";
  photobookTip.style.display="none";
  stickynotesTip.style.display="none";
  radioTip.style.display="none";
  yarnTip.style.display="block";
  photoTip.style.display="none";
});

photo.addEventListener('click', function(){
  breakfastTip.style.display="none";
  photobookTip.style.display="none";
  stickynotesTip.style.display="none";
  radioTip.style.display="none";
  yarnTip.style.display="none";
  photoTip.style.display="block";
});

function resetForm() {
  box.style.display="block";
  close1.style.display="block";
  submitForm.style.display="block";

  boxWords.innerHTML="Name: Emily<br>Gender: Female<br>Ethnicity: White/Caucasian<br>Age: 75 years old";
  return false;
}

function processForm() {

  var userName = document.f.userName.value;

  box.style.display="block";
  submitForm.style.display="block";

  boxWords.innerHTML="Name: " + userName + "<br>Gender: Female<br>Ethnicity: White/Caucasian<br>Age: 75</em>";

  msg1.innerHTML="Good Morning " + userName +"!";

  return false;
}


//music
start.addEventListener('click', function(){
  bgSound.play();
});

pause.addEventListener('click', function(){
  bgSound.pause();
});

console.log("reading");
