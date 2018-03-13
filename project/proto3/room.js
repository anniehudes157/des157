'use strict';

console.log("reading js");

var hand;
var book;
var bg;
var frame;
var sceneW = 2400;
var sceneH = 1000;

function setup() {

  var canvas = createCanvas(1000, 550);
//  canvas.parent('roomSketch');

  //creates a ghost sprite
  hand = createSprite(400, 200);

  hand.addAnimation("float", "images/hand1.png","images/hand2.png");


  //creates the background
  bg = new Group();

  //creates objects in the map
  book = createSprite(400, 400);

  bg = loadImage("images/roomBg.png");
bg.add(book);
}

function draw () {
  background(bg);


  hand.velocity.x = (camera.mouseX - hand.position.x) / 100;
  hand.velocity.y = (camera.mouseY - hand.position.y) / 100;

  camera.zoom = 1;

  //set the camera position to the ghost position
  camera.position.x = hand.position.x;
  camera.position.y = hand.position.y;


  drawSprites(hand);
  drawSprites(book);
  drawSprites(bg);


}
