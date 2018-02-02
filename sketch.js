var ship;
var shots = [];
var enemies = [];
var currentLevel = 0;
var levels = new Level();

function setup() {
  createCanvas(400, 400);
  ship = new Ship(width/2,height*0.8);

  for (i=0; i < levels[currentLevel].enemies; i++) {
    var _x = random(0,400);
    var _y = random(0,400);
    console.log(_x, _y);
    enemies.push(new Enemy(_x, _y, {}))
  }
}

function draw() {
  background(127);

  if (ship.isTransitioning() === true) {
    ship.transitionMovement();
    ship.display();
    return;
  }

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

  // Shots
  for (i=0; i < shots.length; i++) {
    shots[i].move();
    shots[i].display();

    if (shots[i].done === true) {
      shots.splice(i, 1);
    }
  }

  for (i=0; i < enemies.length; i++) {
    enemies[i].display();
  }

  ship.display();
}

function keyPressed() {
    if (key === 'A' && ship.isTransitioning() == false) {
      ship.setTransitioning(true);
    }

    if (key === 'S' && ship.isTransitioning() == false) {
      shots.push(new Shot(ship.x, ship.y, ship.movement));
    }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
