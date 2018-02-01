var ship;
var canvasHeight = 400;
var canvasWidth = 400;

function setup() {
  createCanvas(400, 400);
  ship = new Ship(200,350);
}

function draw() {
  background(127);
  if (keyIsDown(LEFT_ARROW)) {
    ship.move(-1, 0);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ship.move(1, 0);
  }

  if (keyIsDown(UP_ARROW)) {
    ship.move(0, -1);
  }

  if (keyIsDown(DOWN_ARROW)) {
    ship.move(0, 1);
  }

  ship.display();
}


function Ship(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;

  this.move = function(x, y) {

    this.x += x * this.speed;
    if (this.x > canvasWidth) {
      this.x = canvasWidth;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    this.y += y * this.speed;
    if (this.y > canvasHeight) {
      this.y = canvasHeight;
    }

    if (this.y < 0) {
       this.y = 0;
    }
  }

  this.display = function() {
    ellipse(this.x, this.y, 10, 10);
  }
}
