var ship;
var shots = [];

function setup() {
  createCanvas(400, 400);
  ship = new Ship(width/2,height*0.8);
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
