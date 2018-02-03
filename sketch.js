var player;
var enemies = [];
var stars = [];
var starCount = 400;

function preload() {
}

function setup() {
  createCanvas(400, 400);
  player = new Player(width/2,height*0.8);
  createStarfield();
}

function draw() {
  background(0);
  moveStarField();

  if (keyIsDown(LEFT_ARROW)) {
    player.move(LEFT);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.move(RIGHT);
  }

  if (keyIsDown(UP_ARROW)) {
    player.move(UP);
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.move(DOWN);
  }

  player.display();
}

function keyPressed() {
  switch (keyCode) {
    case SPACEBAR:
      player.shoot();
      break;
    case SKEY:
      player.rotateWeapon();
      break;
  }

}

function createStarfield() {
  for (var i = 0; i < starCount; i++) {
    stars[i] = new Star();
  }
}

function moveStarField() {
  for (var i = 0; i < starCount; i++) {
    stars[i].move();
    stars[i].display();
  }
}
