// p5 file
console.log("this is script.js comment");

var a = 0;
var b = 0;
var c = 0;
var d = 0;

function setup() {
  var myCanvas = createCanvas(800, 250);
  //has to parent to an id
  myCanvas.parent('mySketch');
  strokeWeight(1.5);
  background(255);
  rectMode(RADIUS);
}

function draw() {
  //slows down movement
  frameRate(10);
  fill(255, 50);
  noStroke();
  ellipse(mouseX, mouseY, width, height);

  if (mouseIsPressed) {
    //allows circles to fade

    //creates rings around circle
    var i = random(145, 230);
    var j = random(172, 200);
    var k = random(240, 255);
    var r = 5;

    fill(255, 10);
    stroke(i, j, k, 50);
    rect(mouseX, mouseY, a, a);
    fill(255, 30);
    stroke(i, j, k, 100);
    rect(mouseX, mouseY, b, b);
    fill(255, 50);
    stroke(i, j, k, 150);
    rect(mouseX, mouseY, c, c);
    fill(255, 70);
    stroke(i, j, k, 200);
    rect(mouseX, mouseY, d, d);
    r += 5;
    a += 8;
    b += 6;
    c += 4;
    d += 2;

    if (a > 50 || b > 50 || c > 50 || d > 50) {
      a = 0;
      b = 0;
      c = 0;
      d = 0;
    }
  } else {

    var i = random(145, 230);
    var j = random(172, 200);
    var k = random(240, 255);
    var r = 5;

    fill(255, 10);
    stroke(i, j, k, 50);
    ellipse(mouseX, mouseY, a, a);
    fill(255, 30);
    stroke(i, j, k, 100);
    ellipse(mouseX, mouseY, b, b);
    fill(255, 50);
    stroke(i, j, k, 150);
    ellipse(mouseX, mouseY, c, c);
    fill(255, 70);
    stroke(i, j, k, 200);
    ellipse(mouseX, mouseY, d, d);
    r += 5;
    a += 8;
    b += 6;
    c += 4;
    d += 2;

    if (a > 100 || b > 100 || c > 100 || d > 100) {
      a = 0;
      b = 0;
      c = 0;
      d = 0;
    }
  }
  var s = "C L I C K   A N D   H O L D";
  text(s, 20, 230);
}
