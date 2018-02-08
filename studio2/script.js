'use strict';
console.log("testing"); //testing js

var museum = document.getElementById('museum');
var nav = document.getElementById('exhibition');
var stories = document.getElementById('stories');

var closedChest1 = document.getElementById('closedChest1');
var closedChest2 = document.getElementById('closedChest2');
var closedChest3 = document.getElementById('closedChest3');

var openChest1 = document.getElementById('openChest1');
var openChest2 = document.getElementById('openChest2');
var openChest3 = document.getElementById('openChest3');

var tannie = document.getElementById('tannie');
var polaroid = document.getElementById('polaroid');
var frog = document.getElementById('frog');

var tannieStory = document.getElementById('tannieStory');
var polaroidStory = document.getElementById('polaroidStory');
var frogStory = document.getElementById('frogStory');

var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');

museum.addEventListener('click',function(){
  document.body.style.backgroundImage = "url('images/exhibition.jpg')";
  museum.style.display="none";
  closedChest1.style.display="block";
  closedChest2.style.display="block";
  closedChest3.style.display="block";
});

closedChest1.addEventListener('click',function(){
  openChest1.style.display="block";  //chest1 opens
  closedChest1.style.display="none";
  openChest2.style.display="none";  //chest2 closes
  closedChest2.style.display="block";
  openChest3.style.display="none";  //chest3 closes
  closedChest3.style.display="block";
  tannie.style.display="block"; //sumo keychain shows
  polaroid.style.display="none";
  frog.style.display="none";
});

closedChest2.addEventListener('click',function(){
  openChest2.style.display="block"; //chest2 opens
  closedChest2.style.display="none";
  openChest1.style.display="none";  //chest 1 closes
  closedChest1.style.display="block";
  openChest3.style.display="none";  //chest 3 closes
  closedChest3.style.display="block";
  polaroid.style.display="block"; //polaroid camera keychain shows
  tannie.style.display="none";
  frog.style.display="none";
});

closedChest3.addEventListener('click',function(){
  openChest3.style.display="block"; //chest3 opens
  closedChest3.style.display="none";
  openChest1.style.display="none";  //chest1 closes
  closedChest1.style.display="block";
  openChest2.style.display="none";  //chest2 closes
  closedChest2.style.display="block";
  frog.style.display="block"; //frog pin shows
  tannie.style.display="none";
  polaroid.style.display="none";

});

tannie.addEventListener('click',function(){
  tannieStory.style.display="block";
  polaroidStory.style.display="none";
  frogStory.style.display="none";
});

  polaroid.addEventListener('click',function(){
  tannieStory.style.display="none";
  polaroidStory.style.display="block";
  frogStory.style.display="none";
});

frog.addEventListener('click',function(){
  tannieStory.style.display="none";
  polaroidStory.style.display="none";
  frogStory.style.display="block";
});

close1.addEventListener('click',function(){
  tannieStory.style.display="none";
});

close2.addEventListener('click',function(){
  polaroidStory.style.display="none";
});

close3.addEventListener('click',function(){
  frogStory.style.display="none";
});
