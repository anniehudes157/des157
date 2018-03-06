'use strict';

console.log("reading");

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var buttonPage1 = document.getElementById('buttonPage1');
var buttonPage2 = document.getElementById('buttonPage2');
var buttonPage3 = document.getElementById('buttonPage3');
var submit = document.getElementById('submit');


buttonPage1.addEventListener('click',function(){
  page2.style.display="block";  //chest1 opens
  page1.style.display="none";
});

buttonPage2.addEventListener('click',function(){
  page3.style.display="block";  //chest1 opens
  page2.style.display="none";
});

submit.addEventListener('click',function(){
  page4.style.display="block";  //chest1 opens
  page3.style.display="none";
});
