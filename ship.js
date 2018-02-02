function Ship(x, y) {
  this.x = x;
  this.y = y;

  this.startPos = [x, y];
  this.speed = 5;
  this.transitioning = false;
  this.movement = 'flat';

  this.setTransitioning = function(transitioning) {
    this.transitioning = transitioning;
  }

  this.isTransitioning = function() {
    return this.transitioning;
  }

  this.move = function(x, y) {
    if (this.movement === 'parabola') {
      this.moveParabola(x);
    }

    if (this.movement === 'flat') {
      this.moveFlat(x, y);
    }
  }

  this.moveFlat = function(x, y) {

    this.x += x * this.speed;
    if (this.x > width) {
      this.x = width;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    this.y += y * this.speed;
    if (this.y > height) {
      this.y = height;
    }

    if (this.y < 0) {
       this.y = 0;
    }
  }

  this.moveParabola = function(x) {
    this.x += x * this.speed;

    if (this.x > width * 0.95) {
      this.x = parseInt(width * 0.95);
    }

    if (this.x < width * 0.05) {
      this.x = parseInt(width * 0.05);
    }

    this.y = parseInt((sqrt(sq(width/2) - sq(this.x - width/2)) + (width/2) - (height - this.startPos[1])));
    // 0 is the distance from the bottom
  }

  this.transitionMovement = function() {
    if (this.x > this.startPos[0]) {
      this.x -= 1;
    }

    if (this.x < this.startPos[0]) {
      this.x += 1;
    }
    if (this.y > this.startPos[1]) {
      this.y -= 1;
    }

    if (this.y < this.startPos[1]) {
      this.y += 1;
    }

    if (this.x == this.startPos[0] && this.y == this.startPos[1]) {
      if (this.movement === 'parabola') {
        this.movement = 'flat';
      } else if (this.movement === 'flat') {
        this.movement = 'parabola';
      }

      this.setTransitioning(false);
    }

  }

  this.display = function() {
    ellipse(this.x, this.y, 10, 10);
  }
}
