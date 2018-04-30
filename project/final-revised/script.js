'use strict';

alert("This experience is only compatible on a larger screen (1920x1080). Sorry for the inconvenience!");
var bgSound = new Audio('sound/sad.mp3');

var box=document.getElementById("box");
var boxWords =document.getElementById("boxWords");
var submitForm =document.getElementById("submitForm");
var sideNav =document.getElementById("sideNav");

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
var choice1c =document.getElementById("choice1c");

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
  msg2.innerHTML="I hope you're doing well. I left your breakfast on the table, remember to eat it! I'll be taking the kids to school and going to work now."
});

choice1b.addEventListener('click', function(){
  msg2.innerHTML="I'm good! I just left your breakfast on the table. I have to take the kids to school now so I'll see you later. Call me if you need anything!"
});

choice1c.addEventListener('click', function(){
  msg2.innerHTML="Yup, I had to get the kids' lunch ready. I have to take the kids to school now. See you later! Oh, and your breakfast is on the table!"
});

//add warning
submitForm.addEventListener('click', function(){
  alert("You will now begin your story. To prevent loss of data, please only use the arrows or sidebar to navigate. (If you use the navigation at the top left, you will have to enter your information again.) Thank you!");
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

  msg1.innerHTML="Good Morning " + userName +"! You're up early, as usual.";

  return false;
}

console.log("reading");
