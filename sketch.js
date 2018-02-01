var ship;
var canvasHeight = 400;
var canvasWidth = 400;
var bulletSpeed = 5;

const bullets = [];

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

  // fire
  if (keyIsDown(32)) {
    bullets.push(ship.shoot())
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

  this.shoot = function () {
    console.log('shooting');
    if (bullets.length < 1000) {
      return new Bullet(this.x, this.y);
    }

    return;
  }

  this.display = function() {
    ellipse(this.x, this.y, 10, 10);
  }
}

function Bullet(x, y) {
  this.x = x;
  this.y = y;

  console.log('bullet created');
  console.log(this.x, this.y);

  while (this.y < height) {
    console.log('while', this.y)
    this.y += y * 5
  }

  ellipse(this.x + 10, this.y + 20, 10, 10);
}
