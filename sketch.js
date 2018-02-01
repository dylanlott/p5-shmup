var ship;

function setup() {
  createCanvas(400, 400);
  ship = new Ship(width/2,height*0.8);
}

function draw() {
  background(127);
  if (keyIsDown(LEFT_ARROW)) {
    ship.moveParabola(-1);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ship.moveParabola(1);
  }
  //
  // if (keyIsDown(UP_ARROW)) {
  //   ship.move(0, -1);
  // }
  //
  // if (keyIsDown(DOWN_ARROW)) {
  //   ship.move(0, 1);
  // }

  ship.display();
}
