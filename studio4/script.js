'use strict';

console.log('reading');

var bg;
var tv, book;

function setup(){
  var canvas = createCanvas(950, 500);
  canvas.parent('mySketch');

  bg = loadImage("images/room.png");

  book = createSprite(450, 400,50,50);
  tv = createSprite(85, 300, 50, 40);

  book.addAnimation("moving", "images/book01.png", "images/book05.png");
  book.addAnimation("still","images/bookflip01.png");

  tv.addAnimation("static", "images/tv04.png");
  tv.addAnimation("channels","images/tv01.png", "images/tv03.png");


}

function draw() {
  background(bg);

  if(mouseIsPressed) {
  //the rotation is not part of the spinning animation
  book.rotation -= 10;
  book.changeAnimation("moving");

  tv.changeAnimation("channels");
} else {
  book.rotation = 0;
  book.changeAnimation("still");

  tv.changeAnimation("static");
}
  drawSprites();
}
