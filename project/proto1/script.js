'use strict';

console.log("reading");

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var buttonPage1 = document.getElementById('buttonPage1');
var buttonPage2 = document.getElementById('buttonPage2');
var buttonPage3 = document.getElementById('buttonPage3');
var submit = document.getElementById('submit');
var story1 = document.getElementById('story1');

var audio1 = new Audio('sound/sad.mp3');  //plays background music
audio1.play();

buttonPage1.addEventListener('click', function() {  //goes to page 2 on click
  page2.style.display = "block";
  page1.style.display = "none";
});

buttonPage2.addEventListener('click', function() {  //goes to page 3 on click
  page3.style.display = "block";
  page2.style.display = "none";
});

buttonPage3.addEventListener('click', function() {  //goes to page 4 on click
  page4.style.display = "block";
  page3.style.display = "none";
  story1.style.display = "block";
});
