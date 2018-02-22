'use strict';

console.log('reading');

var ghost;
var shelf, tv, clock, vamp, glasses;
var bg;
var frame;
var sceneW = 2400;
var sceneH = 1000;
var intro = document.getElementById('intro');

//removes intro screen when clicked
intro.addEventListener('click', function() {
  intro.style.display = "none";
})

function setup() {

  var canvas = createCanvas(1000, 550);
  canvas.parent('mySketch');
  //creates a ghost sprite
  ghost = createSprite(400, 200);

  var myAnimation = ghost.addAnimation("floating", "images/ghost/ghost01.png", "images/ghost/ghost05.png");
  myAnimation.offY = 18;

  ghost.addAnimation("moving", "images/ghost/ghost01.png", "images/ghost/ghost05.png");

  //creates the background
  bg = new Group();

  //creates objects in the map
  shelf = createSprite(400, 400);
  tv = createSprite(-200, -100);
  clock = createSprite(800, -150);
  vamp = createSprite(-100, 600);
  glasses = createSprite(800, 800);

  animate();
}


function animate() {
  //creates animation for objects
  shelf.addAnimation("still", "images/shelf/shelf01.png");
  shelf.addAnimation("monster", "images/shelf/shelf01.png", "images/shelf/shelf22.png");

  tv.addAnimation("off", "images/tv/tv01.png");
  tv.addAnimation("static", "images/tv/tv01.png", "images/tv/tv06.png");

  clock.addAnimation("solid", "images/clock/clock01.png");
  clock.addAnimation("melt", "images/clock/clock01.png", "images/clock/clock14.png");

  vamp.addAnimation("inCoffin", "images/vamp/vamp01.png");
  vamp.addAnimation("showing", "images/vamp/vamp01.png", "images/vamp/vamp37.png");

  glasses.addAnimation("normal", "images/glasses01.png");
  glasses.addAnimation("flip", "images/glasses01.png", "images/glasses02.png");

  //creates parameters for detecting collision with other objects
  ghost.setCollider("rectangle", 30, 45, 5, 5);

  //adds objects to the map
  bg.add(shelf);
  bg.add(tv);
  bg.add(clock);
  bg.add(vamp);
  bg.add(glasses);

  //loads frame around canvas
  frame = loadImage("images/view.png");

}


function draw() {
  background(33, 33, 33);
  startGame();
}

function startGame() {

  //allows ghost to follow mouse
  ghost.velocity.x = (camera.mouseX - ghost.position.x) / 20;
  ghost.velocity.y = (camera.mouseY - ghost.position.y) / 20;

  //VIRTUAL camera(x,y,z)
  //.5 zoom is zooming out (50% of the normal size)
  camera.zoom = 1;

  //set the camera position to the ghost position
  camera.position.x = ghost.position.x;
  camera.position.y = ghost.position.y;

  //creates barrier to prevent ghost from moving infinitely
  if (ghost.position.x < -200)
    ghost.position.x = -200;
  if (ghost.position.y < -200)
    ghost.position.y = -200;
  if (ghost.position.x > 1100)
    ghost.position.x = 1100;
  if (ghost.position.y > 800)
    ghost.position.y = 800;

  //draw the scene
  drawSprites(bg);

  //draws shadow under ghost
  noStroke();
  fill(0, 0, 0, 20);
  ellipse(ghost.position.x, ghost.position.y + 90, 80, 30);
  //draws out ghost
  drawSprite(ghost);

  //keeps frame on the screen
  camera.off();
  image(frame, 0, 0);

  startAnimation();
  fullScreen();
}

function startAnimation(){
//starts animation of objects when ghost touches objects
if (ghost.overlap(shelf))
shelf.changeAnimation("monster");
else
shelf.changeAnimation("still");

if (ghost.overlap(tv))
tv.changeAnimation("static");
else
tv.changeAnimation("off");

if (ghost.overlap(clock))
clock.changeAnimation("melt");
else
clock.changeAnimation("solid");

if (ghost.overlap(vamp))
vamp.changeAnimation("showing");
else
vamp.changeAnimation("inCoffin");

if (ghost.overlap(glasses))
glasses.changeAnimation("flip");
else
glasses.changeAnimation("normal");

//spins ghost when mouse is pressed
if(mouseIsPressed){
  ghost.rotation-=10;
} else {
  ghost.rotation=0;
}

}


function fullScreen() {
  //allows fullscreen option for a more immersive experience
  var requestFullscreen = function (ele) {
  	if (ele.requestFullscreen) {
  		ele.requestFullscreen();
  	} else if (ele.webkitRequestFullscreen) {
  		ele.webkitRequestFullscreen();
  	} else if (ele.mozRequestFullScreen) {
  		ele.mozRequestFullScreen();
  	} else if (ele.msRequestFullscreen) {
  		ele.msRequestFullscreen();
  	} else {
  		console.log('Fullscreen API is not supported.');
  	}
  };

  var exitFullscreen = function () {
  	if (document.exitFullscreen) {
  		document.exitFullscreen();
  	} else if (document.webkitExitFullscreen) {
  		document.webkitExitFullscreen();
  	} else if (document.mozCancelFullScreen) {
  		document.mozCancelFullScreen();
  	} else if (document.msExitFullscreen) {
  		document.msExitFullscreen();
  	} else {
  		console.log('Fullscreen API is not supported.');
  	}
  };




  var fullS = document.getElementById('fullS');
  var exitFullS= document.getElementById('exitFullS');

  fullS.addEventListener('click', function(e) {
  	e.preventDefault();
  	requestFullscreen(document.documentElement);
  });

  exitFullS.addEventListener('click', function(e) {
  	e.preventDefault();
  	exitFullscreen();
  });
}
