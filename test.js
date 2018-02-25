


function setup () {
  createCanvas(900, 1000);
}


var move = 0;
var x = -100;
var y = -100;

function draw() {
  background(0);
  stroke(5);
  strokeWeight(4);

  //projectile
  fill(255, 0, 0);
  ellipse(x, y, 24, 24);
  y = y - 40;

  //ship
  fill(0, 0, 255);
  triangle(mouseX, mouseY -20, mouseX -30, mouseY +30, mouseX +30, mouseY +30);

}

function mousePressed() {
    if(x == -100 && y == -100) {
    x = mouseX;
    y = mouseY;
  } else (x == mouseX && y == mouseY)
  x = mouseX;
  y = mouseY;

}
