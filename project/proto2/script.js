'use strict';

console.log("reading");

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');
var buttonPage1 = document.getElementById('buttonPage1');
var buttonPage2 = document.getElementById('buttonPage2');
var buttonPage3 = document.getElementById('buttonPage3');
var story1 = document.getElementById('story1');
var tip1 = document.getElementById('tip1');
var coolTip = document.getElementById('coolTip');



//var audio1 = new Audio('sound/sad.mp3'); //plays background music
//audio1.play();

buttonPage1.addEventListener('click', function() { //goes to page 2 on click
  page2.style.display = "block";
  page1.style.display = "none";
  buttonPage1.style.display = "none";
});

buttonPage2.addEventListener('click', function() { //goes to page 3 on click
  page3.style.display = "block";
  page2.style.display = "none";
  buttonPage2.style.display = "none";

});

document.f.onsubmit = processForm;

buttonPage3.addEventListener('click', function() { //goes to page 3 on click
  setTimeout(function(){tip1.style.display = "block"}, 1000*3);
});

page4.addEventListener('click', function() { //goes to page 5 on click
  page5.style.display = "block";
  page4.style.display = "none";
});

/*buttonPage3.addEventListener('click', function() {
  page4.style.display = "block";
  page3.style.display = "none";
  story1.style.display = "block";

});
*/


function processForm() {

  page4.style.display = "block";
  page3.style.display = "none";
  story1.style.display = "block";

  var userName = document.f.userName.value;

  var myMsg = document.getElementById("myMsg");

  myMsg.innerHTML="Good morning " + userName + "! How are you feeling?";

  return false;
}
